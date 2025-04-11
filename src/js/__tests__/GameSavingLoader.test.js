import GameSavingLoader from '../GameSavingLoader.js';
import GameSaving from '../GameSaving.js';

test('getting GameSaving class object by GameSavingLoader.load()', async () => {
  const expected = new GameSaving ('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  const result = await GameSavingLoader.load();

  expect(result).toEqual(expected);
});
