import { Character } from './Character';

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }

  checkType() {
    if (this.type !== 'Bowerman') {
      throw new Error('Должен быть тип: Bowerman');
    }
  }
}
