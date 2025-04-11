import GameSaving from '../GameSaving.js';

test('GameSaving class object construction from a strimg', () => {
    const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const expected = {"id":9,
                      "created":1546300800,
                      "userInfo":{"id":1,
                                  "name":"Hitman",
                                  "level":10,
                                  "points":2000}
                    }
    const result = new GameSaving(data);
    expect(result).toEqual(expected);
});

test('GameSaving class object construction from null', () => {
    expect(() => { const saving = new GameSaving(null); saving })
    .toThrow('Конструктор GameSaving: null не является допустимым объектом.');
});

test('GameSaving class object construction from number', () => {
    const num = 0;
    expect(() => { const saving = new GameSaving(num); saving })
    .toThrow(`Конструктору GameSaving нужна строка или объект, но получен ${typeof num}.`);
});

test('GameSaving class object construction from an object', () => {
    const data = {"id":9,
                  "created":1546300800,
                  "userInfo":{"id":1,
                              "name":"Hitman",
                              "level":10,
                             "points":2000}
    }
    const expected = new GameSaving(data);

    expect(expected).toBeInstanceOf(GameSaving);
});