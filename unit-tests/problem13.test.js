/**
 * @file Unit tests for problem13.js
 * @author Thomas J. Purk
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 */
import { it, expect, describe } from "vitest";
import { problem13 } from "../problems/problem13.js";

describe("problem13()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input_digits = 3;
    const input_itemCount = 1;
    const expectedResult = 371;
    // Act
    const result = problem13(input_digits, input_itemCount);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
