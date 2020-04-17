import { Age } from "./../src/age.js"

describe("Age", () => {

  test('should veryfy that object only contains numbers', () => {
    const age = new Age("20", "80");
    expect(age.age).toEqual(20);
    expect(age.expectancy).toEqual(80);
  })

  test('should convert earth age and expectancy to mercury years', () => {
    const age = new Age("90", "80");
    expect(age.mercuryAge(30)).toEqual(375);
    expect(age.mercuryExpectancy(20)).toEqual(333);
    expect(age.yearsExpectedInMercury()).toEqual(42);
  })

  test('should convert earth age and expectancy to venus years', () => {
    const age = new Age("20", "80");
    expect(age.venusAge(20)).toEqual(32);
    expect(age.venusExpectancy(80)).toEqual(129);
    expect(age.yearsLeftInVenus()).toEqual(97);
  })

  test('should convert earth age and expectancy to mars years', () => {
    const age = new Age("20", "80");
    expect(age.marsAge(20)).toEqual(11);
    expect(age.marsExpectancy(80)).toEqual(43);
    expect(age.yearsLeftInMars()).toEqual(32);
  })

  test('should convert earth age and expectancy to jupiter years', () => {
    const age = new Age("20", "80");
    expect(age.jupiterAge(20)).toEqual(2);
    expect(age.jupiterExpectancy(80)).toEqual(7);
    expect(age.yearsLeftInJupiter()).toEqual(5);
  })



})