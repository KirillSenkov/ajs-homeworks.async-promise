export default class GameSaving {
    constructor(data) {
        switch (typeof data) {
            case 'string':
                data = JSON.parse(data);
                break;
            case 'object':
                if (data === null) {
                    throw new Error('Конструктор GameSaving: null не является допустимым объектом.');
                }
                break;
            default:
                throw new Error(`Конструктору GameSaving нужна строка или объект, но получен ${typeof data}.`);
        }
        this.id = data.id;
        this.created = data.created;
        this.userInfo = { ...data.userInfo };
        Object.freeze(this);
    }
}
/*
{
  "id": <number>, // id сохранения
  "created": <timestamp>, // timestamp создания
  "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
  }
}
*/