import { Age } from "./../src/age.js"

describe("Age", () => {

  test('should veryfy that object only contains numbers', () => {
    const age = new Age("20", "80");
    expect(age.age).toEqual(20);
    expect(age.expectancy).toEqual(80);
  })
})