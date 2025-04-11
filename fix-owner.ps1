[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Получаем текущую директорию
$folderPath = Get-Location
$currentUser = "$env:USERDOMAIN\$env:USERNAME"

$takeownSuccess = $false
$icaclsSuccess = $false

try {
    $takeownResult = takeown /F "$folderPath" 2>&1
    if ($LASTEXITCODE -eq 0) {
        $takeownSuccess = $true
    }

    $icaclsResult = icacls "$folderPath" /setowner "$currentUser" /C 2>&1
    if ($LASTEXITCODE -eq 0) {
        $icaclsSuccess = $true
    }

    if ($takeownSuccess -and $icaclsSuccess) {
        Write-Output "✅ Владение обновлено: $folderPath → $currentUser"
    } else {
        Write-Warning "⚠️ Попытка смены владельца не полностью удалась."
        if (-not $takeownSuccess) {
            Write-Warning "❌ takeown завершился с ошибкой:"
            $takeownResult | ForEach-Object { Write-Warning "    $_" }
        }
        if (-not $icaclsSuccess) {
            Write-Warning "❌ icacls завершился с ошибкой:"
            $icaclsResult | ForEach-Object { Write-Warning "    $_" }
        }
    }
} catch {
    Write-Error "❌ Критическая ошибка при выполнении: $_"
}
