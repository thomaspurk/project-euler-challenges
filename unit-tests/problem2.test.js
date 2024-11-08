/**
 * @file Unit tests for problem2.js
 * @author Thomas J. Purk
 */
import { it, expect, describe } from "vitest";
import { problem2 } from "../problems/problem2.js";

describe("problem2()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 89;
    const expectedResult = 44;
    // Act
    const result = problem2(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
