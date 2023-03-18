export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) throw new Error("Number outside allowable range (1-100)");

  if (n % 3 === 0) return "Fizz";
  return String(n);
}
