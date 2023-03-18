import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should return a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });

  it("should throw error if number is not between 1 and 100", () => {
    expect(() => fizzbuzz(-1)).toThrow();
  });

  it("should return 'Fizz' for multiples of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("should return 'Buzz' for multiples of 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("should return 'FizzBuzz' for multiples of 15", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("should be able to handle any number of inputs", () => {
    const expected = "FizzBuzzBuzzFizzBuzz";
    expect(fizzbuzz(3, 5, 10, 15)).toMatch(expected);
  });
});
