import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    
    console.log(saving);
  }, (error) => {
    throw new Error(`GameSavingLoader.load() fail with ${error}`);
  });

