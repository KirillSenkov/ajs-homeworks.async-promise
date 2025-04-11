
$base = Get-Location
$paths = @("src", "__tests__", "package.json")

$indentTree = {
    param($path, $prefix = "")
    $items = Get-ChildItem -LiteralPath $path -Force | Sort-Object -Property PSIsContainer -Descending
    foreach ($item in $items) {
        if ($item.Name -in @("node_modules", ".git", "dist", ".vscode")) { continue }
        $name = $item.Name
        "$prefix$name" | Out-File -Append -Encoding utf8 "$base\tree.clean.txt"
        if ($item.PSIsContainer) {
            &$indentTree $item.FullName "$prefix  "
        }
    }
}

# Очистка предыдущего дерева
Remove-Item "$base\tree.clean.txt" -ErrorAction SilentlyContinue

# Проход по путям
foreach ($p in $paths) {
    $full = Join-Path $base $p
    if (Test-Path $full) {
        if (Test-Path $full -PathType Leaf) {
            $p | Out-File -Append -Encoding utf8 "$base\tree.clean.txt"
        } else {
            "$p" | Out-File -Append -Encoding utf8 "$base\tree.clean.txt"
            &$indentTree $full "  "
        }
    }
}
