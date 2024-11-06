/**
 * @file Unit tests for problem7.js
 * @author Thomas J. Purk
 * By listing the first six prime numbers: 2,3,5,7,11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 */
import { it, expect, describe } from "vitest";
import { problem7 } from "./problem7.js";

describe("problem7()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 6;
    const expectedResult = 13;
    // Act
    const result = problem7(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
