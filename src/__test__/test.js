import { Bowerman } from '../js/Bowerman';
import { Swordsman } from '../js/Swordsman';
import { Magician } from '../js/Magician';
import { Daemon } from '../js/Daemon';
import { Undead } from '../js/Undead';
import { Zombie } from '../js/Zombie';
import { Character } from '../js/Character';

test.each([
  ['I', Character, 'Bowerman'],
  ['IvanPetrovich', Character, 'Bowerman'],
  ['I', Bowerman, 'Bowerman'],
  ['IvanPetrovich', Bowerman, 'Bowerman'],
])('testing checkName - name: %s, object: %s, type: %s', (name, Player, type) => {
  expect(() => {
    const ivan = new Player(name, type);
    ivan.checkName();
  }).toThrowError('Количество символов должно быть от 2х до 10');
});

test.each([
  [Character, 'Player'],
  [Bowerman, 'Player'],
  [Zombie, 'Player'],
  [Undead, 'Player'],
  [Daemon, 'Player'],
  [Magician, 'Player'],
  [Swordsman, 'Player'],
])('testing function - checkType: object %s', (Player, type) => {
  expect(() => {
    const player = new Player('Ivan', type);
  }).toThrowError(`Должен быть один из типов: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie`);
});

test('testing error of function - levelUp for Character', () => {
  expect(() => {
    const ivan = new Character('Ivan', 'Zombie', 30, 40);
    ivan.health = -10;
    ivan.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test.each([
  [Character, 'Bowerman'],
  [Bowerman, 'Bowerman'],
  [Zombie, 'Zombie'],
  [Undead, 'Undead'],
  [Daemon, 'Daemon'],
  [Magician, 'Magician'],
  [Swordsman, 'Swordsman'],
])('testing error of function - levelUp: %s', (Player, type) => {
  expect(() => {
    const ivan = new Player('Ivan', type);
    ivan.health = -10;
    ivan.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test.each([
  [Character, 'Bowerman'],
  [Bowerman, 'Bowerman'],
  [Zombie, 'Zombie'],
  [Undead, 'Undead'],
  [Daemon, 'Daemon'],
  [Magician, 'Magician'],
  [Swordsman, 'Swordsman'],
])('testing error of function - damage: %s', (Player, type) => {
  expect(() => {
    const ivan = new Player('Ivan', type);
    ivan.health = -10;
    ivan.damage();
  }).toThrowError('Игрок уже умер');
});

test('testing of function - damage for Character', () => {
  const ivan = new Character('Ivan', 'Zombie');
  const result = ivan.damage(30);
  expect(result).toBe();
});

test('testing of function - levelUp for Character', () => {
  const ivan = new Character('Ivan', 'Daemon');
  const result = ivan.levelUp();
  expect(result).toEqual();
});
