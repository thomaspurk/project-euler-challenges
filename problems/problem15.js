/**
 * @file Contains a function that answer Project Euler Problem 15
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

// Track path data
let paths = {};

/**
 * @function problem15 Computes the answer to Project Euler Problem #1 based on the input.
 * @export
 * @param {number} gridSize The input to problem 15.
 * @return {number} The answer to problem 15.
 */
export function problem15(gridSize) {
  let columnSize = gridSize + 1;
  let rowSize = gridSize + 1;

  let answer = 0;
  // Find all possible route through an iterative stepping algorythm
  answer = nextRouteStep(1, 1, columnSize, rowSize);
  // Count up the route that made it to the end.

  return answer;
}

/**
 * @function nextRouteStep Step through all the diffent moves on a route until max x and Y is hit.
 *
 * @param {number} x current x-position
 * @param {number} y current y-position
 * @param {number} maxX the x-size of the grid
 * @param {number} maxY the y-size of the grid
 * @return {number} the number of paths
 */
function nextRouteStep(x, y, maxX, maxY) {
  //if (x == maxX && y == maxY) debugger;
  let pathCount = 0;
  // No need to trace from known nodes more than once.
  // pull paths from known nodes from paths cache
  if (paths[x + "_" + y]) {
    // The paths from this node forward have already been traced
    // Only need to return the path count for this node
    // instead of interating over the child nodes again
    pathCount = paths[x + "_" + y];
  } else {
    // The paths from this node have NOT been traced.
    // Process the unknown node
    // Path to End in X direction (Horizontal)
    let newPathCount = 0;
    if (x < maxX) {
      newPathCount += nextRouteStep(x + 1, y, maxX, maxY); // recursive call
    }
    // Path to End in Y direction (Vertical)
    if (y < maxY) {
      newPathCount += nextRouteStep(x, y + 1, maxX, maxY); // recursive call
    }

    // If the current node is the last node (far lower right)
    // then set the path count to one because adjacent nodes
    // will have only one path to get here.
    if (x == maxX && y == maxY) newPathCount = 1;

    // Create the new node
    paths[x + "_" + y] = newPathCount;
    pathCount = newPathCount;
  }

  return pathCount;
}
