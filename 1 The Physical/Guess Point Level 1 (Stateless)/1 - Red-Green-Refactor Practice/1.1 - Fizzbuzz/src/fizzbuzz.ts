// Curry base function to check if a number is a multiple of another number
const isMultiple =
  (denominator: number) => (numerator: number) =>
    numerator % denominator === 0;

// Derive partially applied helpers for specific cases
const isMultipleOf3 = isMultiple(3);
const isMultipleOf5 = isMultiple(5);
const isMultipleOf15 = isMultiple(15);

export function fizzbuzz(...n: Array<number>): string {
  return n.reduce<string>((result, n) => {
    // Validate Input
    if (n < 1 || n > 100) throw new Error("Out of range value detected");

    // Check multiples and assemble result string
    if (isMultipleOf15(n)) return result += "FizzBuzz";
    if (isMultipleOf5(n)) return result += "Buzz";
    if (isMultipleOf3(n)) return result += "Fizz";

    // Fallthrough case
    return result += n;
  }, "");
}
