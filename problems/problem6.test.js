/**
 * @file Unit tests for problem6.js
 * @author Thomas J. Purk
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385.
 * The square of the sum of the first ten natural numbers is,
 * ( 1 + 2 + ... + 10 )^2 = 55^2 = 3025.
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers
 * and the square of the sum.
 */
import { it, expect, describe } from "vitest";
import { problem6 } from "./problem6.js";

describe("problem6()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 10;
    const expectedResult = 2640;
    // Act
    const result = problem6(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
