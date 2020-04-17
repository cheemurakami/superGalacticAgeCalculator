export class Age {
  constructor(age, expectancy){
    this.age = parseInt(age);
    this.expectancy = parseInt(expectancy);

  }

  mercuryAge(){
    return this.mercuryYears(this.age);
  }
  mercuryExpectancy(){
    return this.mercuryYears(this.expectancy);
  }
  mercuryYears(earthYears) {
    return earthYears * .24
  }
}