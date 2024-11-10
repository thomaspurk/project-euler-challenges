/**
 * @file Unit tests for compute-permutations.js
 * @author Thomas J. Purk
 *
 * The lexicographic permutations of 0, 1 and 2 are:
 *
 *     012   021   102   120   201   210
 */

import { it, expect, describe } from "vitest";
import { computePermutations } from "../utils/compute-permutations.js";

describe("computePermutation()", () => {
  it("should return the correct array of permutations", () => {
    // Arrange
    const input = "012".split("");
    const expectedResult = ["012", "021", "102", "120", "201", "210"];
    // Act
    const result = computePermutations(input);
    // Assert
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
