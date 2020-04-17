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



})