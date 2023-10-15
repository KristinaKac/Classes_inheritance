export class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    this.checkName();
    this.checkType();
  }

  checkName() {
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Количество символов должно быть от 2х до 10');
    }
  }

  checkType() {
    if (this.type === 'Bowerman' || this.type === 'Swordsman' || this.type === 'Magician' || this.type === 'Daemon'
            || this.type === 'Undead' || this.type === 'Zombie') {

    } else {
      throw new Error('Должен быть один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    } else {
      this.level += 1;
      this.attack = (this.attack * 120) / 100;
      this.defence = (this.defence * 120) / 100;
      this.health = 100;
      return this;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      return this.health;
    }
    throw new Error('Игрок уже умер');
  }
}
