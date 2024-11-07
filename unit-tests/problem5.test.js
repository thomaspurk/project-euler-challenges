/**
 * @file Unit tests for problem5.js
 * @author Thomas J. Purk
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */
import { it, expect, describe } from "vitest";
import { problem5 } from "../problems/problem5.js";

describe("problem5()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedResult = 2520;
    // Act
    const result = problem5(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
