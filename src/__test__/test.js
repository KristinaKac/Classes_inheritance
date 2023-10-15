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
  ['I', Zombie, 'Zombie'],
  ['IvanPetrovich', Zombie, 'Zombie'],
  ['I', Undead, 'Undead'],
  ['IvanPetrovich', Undead, 'Undead'],
  ['I', Daemon, 'Daemon'],
  ['IvanPetrovich', Daemon, 'Daemon'],
  ['I', Magician, 'Magician'],
  ['IvanPetrovich', Magician, 'Magician'],
  ['I', Swordsman, 'Swordsman'],
  ['IvanPetrovich', Swordsman, 'Swordsman'],
])('testing function - checkName: name %s, object %s, type %s', (name, Player, type) => {
  expect(() => {
    const ivan = new Player(name, type, 30, 40);
    ivan.checkName();
  }).toThrowError('Количество символов должно быть от 2х до 10');
});

test('testing function - checkType', () => {
  expect(() => {
    const ivan = new Character('Ivan', 'Player', 30, 40);
    ivan.checkType();
  }).toThrowError('Должен быть один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test.each([
  [Bowerman, 'Zombie', 'Bowerman'],
  [Zombie, 'Bowerman', 'Zombie'],
  [Undead, 'Zombie', 'Undead'],
  [Daemon, 'Undead', 'Daemon'],
  [Magician, 'Bowerman', 'Magician'],
  [Swordsman, 'Magician', 'Swordsman'],
])('testing function - checkType: name %s, object %s, type %s', (Player, type, expected) => {
  expect(() => {
    const ivan = new Player('Ivan', type);
    ivan.checkType();
  }).toThrowError(`Должен быть тип: ${expected}`);
});

test('testing error of function - levelUp for Character', () => {
  expect(() => {
    const ivan = new Character('Ivan', 'Zombie', 30, 40);
    ivan.health = -10;
    ivan.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test.each([
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

test('testing error of function - damage for Character', () => {
  expect(() => {
    const ivan = new Character('Ivan', 'Zombie', 30, 40);
    ivan.health = -10;
    ivan.damage();
  }).toThrowError('Игрок уже умер');
});

test.each([
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
  const ivan = new Character('Ivan', 'Zombie', 30, 40);
  const result = ivan.damage(30);
  expect(result).toBe(82);
});

test('testing of function - levelUp for Character', () => {
  const ivan = new Character('Ivan', 'Zombie', 30, 40);
  const result = ivan.levelUp();
  expect(result).toEqual({
    attack: 36, defence: 48, health: 100, level: 2, name: 'Ivan', type: 'Zombie',
  });
});
