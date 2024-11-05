/**
 * @file Unit tests for problem1.js
 * @author Thomas J. Purk
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
import { it, expect, describe } from "vitest";
import { problem7 } from "./problem7.js";

describe("problem7()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 10;
    const expectedResult = 23;
    // Act
    const result = problem1(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
