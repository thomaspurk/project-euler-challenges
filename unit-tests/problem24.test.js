/**
 * @file Unit tests for problem24.js
 * @author Thomas J. Purk
 *
 * A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order.
 * The lexicographic permutations of 0, 1 and 2 are:
 *
 *     012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the
 * digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */
import { it, expect, describe } from "vitest";
import { problem24 } from "../problems/problem24.js";

describe("problem24()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input_population = ["0", "1", "2"];
    const input_position = 2;
    const expectedResult = "021";
    // Act
    const result = problem24(input_population, input_position);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
