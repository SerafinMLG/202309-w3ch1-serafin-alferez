import { Character } from './character';

export class Fighter extends Character {
  phrasePersonal: string = 'Primero pego y luego pregunto';
  skill: number;
  weapon: string;

  constructor(
    name: string,
    family: string,
    age: number,
    skill : number,
    weapon: string
  ) {
    super(name, family, age);
    this.skill = skill;
    this.weapon = weapon;
  }

  phrase() {
    return super.phrase(this.phrasePersonal);
  }
}
