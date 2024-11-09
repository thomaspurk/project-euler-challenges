/**
 * @file Unit tests for problem20.js
 * @author Thomas J. Purk
 *
 * n! means n×(n−1)×⋯×3×2×1.\
 * For example, 10!=10×9×⋯×3×2×1=3628800,and the sum of the digits in the
 * number 10! is 3+6+2+8+8+0+0=27.
 *
 * Find the sum of the digits in the number 100!.
 */

import { it, expect, describe } from "vitest";
import { problem20 } from "../problems/problem20.js";

describe("problem20()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 10;
    const expectedResult = 27;
    // Act
    const result = problem20(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
