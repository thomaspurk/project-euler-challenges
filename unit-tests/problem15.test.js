/**
 * @file Unit tests for problem15.js
 * @author Thomas J. Purk
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?

 * Sides of the boxes define the row and column count since the sides
 * of the boxes define the path of travel.
 * Example: a 2 box x 2 box grid has 3 rows and 3 columns
 * 1 x 1 -> 2 unique vert. sides 2 paths
 * 2 x 2 -> 6 unique vert. sides 6 paths
 * 3 x 3 -> 9 unique vert. sides 20 paths
 */
import { it, expect, describe } from "vitest";
import { problem15 } from "../problems/problem15.js";

describe("problem15()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 2;
    const expectedResult = 6;
    // Act
    const result = problem15(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
