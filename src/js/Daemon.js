import { Character } from './Character';

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  checkType() {
    if (this.type !== 'Daemon') {
      throw new Error('Должен быть тип: Daemon');
    }
  }
}
