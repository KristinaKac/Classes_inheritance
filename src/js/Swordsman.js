import { Character } from './Character';

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }

  checkType() {
    if (this.type !== 'Swordsman') {
      throw new Error('Должен быть тип: Swordsman');
    }
  }
}
