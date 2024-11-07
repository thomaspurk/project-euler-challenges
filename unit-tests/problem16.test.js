/**
 * @file Unit tests for problem16.js
 * @author Thomas J. Purk
 * 2^15 = 32768 and the sum of its digits is 3+2+7+6+8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */
import { it, expect, describe } from "vitest";
import { problem16 } from "../problems/problem16.js";

describe("problem16)", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const a = 2;
    const b = 15;
    const expectedResult = 26;
    // Act
    const result = problem16(a, b);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
