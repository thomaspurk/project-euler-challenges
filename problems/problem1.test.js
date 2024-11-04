/**
 * @file Unit tests for problem1.js
 * @author Thomas J. Purk
 */
import { it, expect, describe } from "vitest";
import { problem1 } from "./problem1.js";

describe("problem1()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 10;
    const expectedResult = 23;
    // Act
    const result = problem1(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
