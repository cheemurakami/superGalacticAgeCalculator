import { Age } from "./../src/age.js"

describe("Age", () => {

  test('should veryfy that object only contains numbers', () => {
    const age = new Age("20", "80");
    expect(age.age).toEqual(20);
    expect(age.expectancy).toEqual(80);
  })

  test('should convert earth age and expectancy to mercury years', () => {
    const age = new Age("20", "80");
    expect(age.mercuryAge(20)).toEqual(4.8);
    expect(age.mercuryExpectancy(80)).toEqual(19.2);
  })

  test('should convert earth age and expectancy to venus years', () => {
    const age = new Age("20", "80");
    expect(age.venusAge(20)).toEqual(12.4);
    expect(age.venusExpectancy(80)).toEqual(49.6);
  })

  test('should convert earth age and expectancy to mars years', () => {
    const age = new Age("20", "80");
    expect(age.marsAge(20)).toEqual(37.6);
    expect(age.marsExpectancy(80)).toEqual(150.4);
  })



})