export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) throw new Error("Number outside allowable range (1-100)");
  return String(n);
}
