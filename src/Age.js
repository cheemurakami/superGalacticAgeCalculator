export class Age {
  constructor(age, expectancy, yearsLeft) {
    this.age = parseInt(age);
    this.expectancy = parseInt(expectancy);
    this.yearsLeft = 0;
  }

  mercuryYears(earthYears) {
    return Math.round(earthYears / .24 * 10 / 10);
  }
  mercuryAge() {
    return this.mercuryYears(this.age);
  }
  mercuryExpectancy() {
    return this.mercuryYears(this.expectancy);
  }
  yearsLeftInMercury(){
    this.yearsLeft = this.mercuryExpectancy() - this.mercuryAge();
    return this.yearsLeft;
  }

  venusYears(earthYears) {
    return Math.round(earthYears / .62 * 10 / 10);
  }
  venusAge() {
    return this.venusYears(this.age);
  }
  venusExpectancy() {
    return this.venusYears(this.expectancy);
  }

  marsYears(earthYears) {
    return Math.round(earthYears / 1.88 * 10 / 10);
  }
  marsAge() {
    return this.marsYears(this.age);
  }
  marsExpectancy() {
    return this.marsYears(this.expectancy);
  }

  jupiterYears(earthYears) {
    return Math.round(earthYears / 11.86);
  }
  jupiterAge() {
    return this.jupiterYears(this.age);
  }
  jupiterExpectancy() {
    return this.jupiterYears(this.expectancy);
  }


}