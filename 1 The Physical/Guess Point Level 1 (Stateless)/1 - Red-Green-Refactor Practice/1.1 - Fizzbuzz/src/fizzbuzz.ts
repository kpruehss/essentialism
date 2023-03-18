const isMultiple =
  (divisor: number) => (value: number) => value % divisor === 0;

const isMultipleOf3 = isMultiple(3);
const isMultipleOf5 = isMultiple(5);

export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) throw new Error("Number outside allowable range (1-100)");

  if (isMultipleOf3(n)) return "Fizz";
  if (isMultipleOf5(n)) return "Buzz";
  return String(n);
}
