import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read() // возвращается Promise!
    .then((data) => {
      return json(data); // возвращается Promise!
    })
    .then((value) => {
      const saving = new GameSaving(value);

      return new Promise((resolve) => { resolve(saving); });
    });
  }
}