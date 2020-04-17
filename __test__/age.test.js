import { Age } from "./../src/age.js"

describe("Age", () => {

  test('should veryfy that object only contains numbers', () => {
    const age = new Age("20", "80");
    expect(age.age).toEqual(20);
    expect(age.expectancy).toEqual(80);
  })

  test('should convert earth age and expectancy to mercury years', () => {
    const age = new Age("90", "80");
    expect(age.mercuryAge(90)).toEqual(375);
    expect(age.mercuryExpectancy(80)).toEqual(333);
    expect(age.yearsExpectedOrPastInMercury()).toEqual(42);
  })

  test('should convert earth age and expectancy to venus years', () => {
    const age = new Age("90", "80");
    expect(age.venusAge(90)).toEqual(145);
    expect(age.venusExpectancy(80)).toEqual(129);
    expect(age.yearsExpectedOrPastInVenus()).toEqual(16);
  })

  test('should convert earth age and expectancy to mars years', () => {
    const age = new Age("80", "20");
    expect(age.marsAge(80)).toEqual(43);
    expect(age.marsExpectancy(20)).toEqual(11);
    expect(age.yearsExpectedOrPastInMars()).toEqual(32);
  })

  test('should convert earth age and expectancy to jupiter years', () => {
    const age = new Age("80", "20");
    expect(age.jupiterAge(80)).toEqual(7);
    expect(age.jupiterExpectancy(80)).toEqual(2);
    expect(age.yearsExpectedOrPastInJupiter()).toEqual(5);
  })



})