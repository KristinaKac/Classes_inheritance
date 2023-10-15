import { Character } from './Character';

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }

  checkType() {
    if (this.type !== 'Undead') {
      throw new Error('Должен быть тип: Undead');
    }
  }
}
