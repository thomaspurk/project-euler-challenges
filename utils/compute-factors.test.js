/**
 * @file Unit tests for factors.js
 * @author Thomas J. Purk
 */
import { it, expect, describe } from "vitest";
import { computeFactors } from "./compute-factors.js";

describe("computeFactors()", () => {
  it("sould return and object with specific properties", () => {
    // Arrange
    const input = 28;
    const expectedResult = {
      factors: [1, 28, 2, 14, 7, 4],
      primeFactors: [2, 7],
    };
    // Act
    const result = computeFactors(input);
    // Assert
    expect(result.factors).toEqual(
      expect.arrayContaining(expectedResult.factors)
    );
    expect(result.primeFactors).toEqual(
      expect.arrayContaining(expectedResult.primeFactors)
    );
  });
});
