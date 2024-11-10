/**
 * @file Unit tests for is-prime.js
 * @author Thomas J. Purk
 */
import { it, expect, describe } from "vitest";
import { isPrime } from "../utils/is-prime.js";

describe("isPrime()", () => {
  it("should return false for 1", () => {
    // Arrange
    const input = 1;
    // Act
    const result = isPrime(input);
    // Assert
    expect(result).toBeFalsy();
  });
  it("should return true for 2", () => {
    // Arrange
    const input = 2;
    // Act
    const result = isPrime(input);
    // Assert
    expect(result).toBeTruthy();
  });
  it("should return true for 7", () => {
    // Arrange
    const input = 7;
    // Act
    const result = isPrime(input);
    // Assert
    expect(result).toBeTruthy();
  });
});
