const isMultiple =
  (divisor: number) => (value: number) => value % divisor === 0;

const isMultipleOf3 = isMultiple(3);
const isMultipleOf5 = isMultiple(5);
const isMultipleOf15 = isMultiple(15);

export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) throw new Error("Number outside allowable range (1-100)");

  if (isMultipleOf15(n)) return "FizzBuzz";
  if (isMultipleOf5(n)) return "Buzz";
  if (isMultipleOf3(n)) return "Fizz";
  
  return String(n);
}
