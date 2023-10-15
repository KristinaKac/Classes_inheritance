import { Character } from './Character';

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }

  checkType() {
    if (this.type !== 'Zombie') {
      throw new Error('Должен быть тип: Zombie');
    }
  }
}
