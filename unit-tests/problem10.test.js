/**
 * @file Unit tests for problem10.js
 * @author Thomas J. Purk
 * The sum of the primes below 10 is 2+3+5+7=17.
 *
 * Find the sum of all the primes below two million.
 */
import { it, expect, describe } from "vitest";
import { problem10 } from "../problems/problem10.js";

describe("problem10()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 10;
    const expectedResult = 17;
    // Act
    const result = problem10(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
