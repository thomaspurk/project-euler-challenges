/**
 * @file Unit tests for problem11.js
 * @author Thomas J. Purk
 * In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
 *
 * The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
 *
 * What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
 */
import { it, expect, describe } from "vitest";
import { problem11 } from "./problem11.js";

describe("problem11()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const expectedResult = 70600674;
    // Act
    const result = problem11();
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
