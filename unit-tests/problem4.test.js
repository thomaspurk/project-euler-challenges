/**
 * @file Unit tests for problem4.js
 * @author Thomas J. Purk
 * A palindromic number reads the same both ways. The largest palindrome
 * made from the product of two-digit numbers is 9009 = 91 x 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
import { it, expect, describe } from "vitest";
import { problem4 } from "../problems/problem4.js";

describe("problem4()", () => {
  it("should return the correct answer to the sample problem", () => {
    // Arrange
    const input = 2;
    const expectedResult = 9009;
    // Act
    const result = problem4(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
