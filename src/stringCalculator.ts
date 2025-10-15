export function stringCalculator(input: string): number {
  if (!input) return 0;

  // Support custom delimiter like "//;\n1;2"
  let delimiter = /,|\n/;
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    input = parts[1];
  }

  const numbers = input
    .split(delimiter)
    .map((n) => n.trim())
    .filter((n) => n !== "")
    .map(Number);

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numbers.reduce((sum, num) => sum + (num <= 1000 ? num : 0), 0);
}
