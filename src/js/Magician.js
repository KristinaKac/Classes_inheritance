import { Character } from './Character';

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  checkType() {
    if (this.type !== 'Magician') {
      throw new Error('Должен быть тип: Magician');
    }
  }
}
