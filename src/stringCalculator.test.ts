import { stringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("returns sum for comma-separated numbers", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
  });

  test("handles new line delimiters", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter", () => {
    expect(stringCalculator("//;\n1;2")).toBe(3);
  });

  test("throws error for negative numbers", () => {
    expect(() => stringCalculator("1,-2,3,-4")).toThrow(
      "Negatives not allowed: -2, -4"
    );
  });

  test("ignores numbers greater than 1000", () => {
    expect(stringCalculator("2,1001")).toBe(2);
  });
});
