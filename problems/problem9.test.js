/**
 * @file Unit tests for problem9.js
 * @author Thomas J. Purk
 * A Pythagorean triplet is a set of three natural numbers, a<b<c,
 * for which,a^2 + b^2 = c^2.
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.'
 */
import { it, expect, describe } from "vitest";
import { problem9 } from "./problem9.js";

describe("problem9()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 12;
    const expectedResult = 60;
    // Act
    const result = problem9(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
