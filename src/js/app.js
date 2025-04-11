import GameSavingLoader from './GameSavingLoader.js';

(async function() {
    try {
        const saving = await GameSavingLoader.load();
        // saving — объект класса GameSaving
        console.log(saving);
    } catch (e) {
        console.log('еггог: ', e);
    }
})();

