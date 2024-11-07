/**
 * @file Unit tests for problem3.js
 * @author Thomas J. Purk
 */
import { it, expect, describe } from "vitest";
import { problem3 } from "../problems/problem3.js";

describe("problem3()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 13195;
    const expectedResult = 29;
    // Act
    const result = problem3(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
