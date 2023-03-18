import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  const cases = [
    [[], ""],
    [[1, 1, 1, 1, 1], "11111"],
    [[1, 2, 3], "12Fizz"],
    [[3, 4, 5], "Fizz4Buzz"],
    [[3, 5, 10, 15], "FizzBuzzBuzzFizzBuzz"],
    [[12, 9, 30], "FizzFizzFizzBuzz"]
  ];

  it("should exist", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should return a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });

  it("should throw error if number is not between 1 and 100", () => {
    expect(() => fizzbuzz(-1)).toThrow();
  });

  it("should be able to handle any number of inputs", () => {
    const expected = "FizzBuzzBuzzFizzBuzz";
    expect(fizzbuzz(3, 5, 10, 15)).toMatch(expected);
  });

  it("should return empty string when no input is present", () => {
    expect(fizzbuzz()).toBe("");
  });

  it.each(cases)(
    "Given numbers %s, it should return %s",
    (numbers, expected) => expect(fizzbuzz(...numbers as number[]))
      .toEqual(expected)
  );
});
