const isMultiple =
  (divisor: number) => (value: number) => value % divisor === 0;

const isMultipleOf3 = isMultiple(3);
const isMultipleOf5 = isMultiple(5);
const isMultipleOf15 = isMultiple(15);

export function fizzbuzz(...n: Array<number>): string {
  return n.reduce<string>((result, n) => {
    if (n < 1 || n > 100) throw new Error("Out of range value detected");
    if (isMultipleOf15(n)) return result += "FizzBuzz";
    if (isMultipleOf5(n)) return result += "Buzz";
    if (isMultipleOf3(n)) return result += "Fizz";
    return result += n;
  }, "");
}
