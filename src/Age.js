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
  yearsExpectedOrPastInMercury(age, expectancy) {
    if (age <= expectancy) {
      this.yearsLeft = this.mercuryExpectancy() - this.mercuryAge();
      return Math.abs(this.yearsLeft);
    } else {
      this.yearsLeft = this.mercuryAge() - this.mercuryExpectancy();
      return Math.abs(this.yearsLeft);
    }
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
  yearsExpectedOrPastInVenus(age, expectancy) {
    if (age <= expectancy) {
      this.yearsLeft = this.venusExpectancy() - this.venusAge();
      return Math.abs(this.yearsLeft);
    } else {
      this.yearsLeft = this.venusAge() - this.venusExpectancy();
      return Math.abs(this.yearsLeft);
    }
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
  yearsExpectedOrPastInMars(age, expectancy) {
    if (age <= expectancy) {
      this.yearsLeft = this.marsExpectancy() - this.marsAge();
      return Math.abs(this.yearsLeft);
    } else {
      this.yearsLeft = this.marsAge() - this.marsExpectancy();
      return Math.abs(this.yearsLeft);
    }
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
  yearsExpectedOrPastInJupiter(age, expectancy) {
    if (age <= expectancy) {
      this.yearsLeft = this.jupiterExpectancy() - this.jupiterAge();
      return Math.abs(this.yearsLeft);
    } else {
      this.yearsLeft = this.jupiterAge() - this.jupiterExpectancy();
      return Math.abs(this.yearsLeft);
    }
  }

}