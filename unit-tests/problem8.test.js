/**
 * @file Unit tests for problem8.js
 * @author Thomas J. Purk
 * The four adjacent digits in the 1000-digit number that have the greatest product are
 * 9 x 9 x 8 x 9 = 5832.
 *
 * Find the thirteen adjacent digits in the
 * 1000-digit number that have the greatest product. What is the value of this product?
 */

import { it, expect, describe } from "vitest";
import { problem8 } from "../problems/problem8.js";

describe("problem8()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 4;
    const expectedResult = 5832;
    // Act
    const result = problem8(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
