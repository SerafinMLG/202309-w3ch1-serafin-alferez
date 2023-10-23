import { Character } from './character';

export class King extends Character {
  patron: string = 'Fighter';
  personalQuote: string = "Soy un loser";
  servilityGrade: number;
  
  constructor(
    name: string,
    family: string, 
    age: number,
    servilityGrade: number
  ) {
    super(name, family, age);
    this.servilityGrade = servilityGrade;
    this.patron = 'Fighter';
    this.servilityGrade = servilityGrade;
  }

  phrase() {
    return super.phrase(this.personalQuote);
  }
}
