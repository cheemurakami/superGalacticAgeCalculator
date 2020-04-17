export class Age {
  constructor(age, expectancy){
    this.age = parseInt(age);
    this.expectancy = parseInt(expectancy);
  }
  
  mercuryYears(earthYears) {
    return earthYears * .24;
  }
  mercuryAge(){
    return this.mercuryYears(this.age);
  }
  mercuryExpectancy(){
    return this.mercuryYears(this.expectancy);
  }
  venusYears(earthYears){
    return earthYears * .62;
  }
  venusAge(){
    return this.venusYears(this.age);
  }
  venusExpectancy(){
    return this.venusYears(this.expectancy);
  }
}