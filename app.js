/**
 * @file The main execution file for executing each Project Euler Problem
 * @author Thomas J. Purk
 */

// The files containing function for solving the problems which have been completed so far.
const problems = [
  // "./problems/problem1.js",
  // "./problems/problem2.js",
  // "./problems/problem3.js",
  // "./problems/problem4.js",
  // "./problems/problem5.js",
  // "./problems/problem6.js",
  // "./problems/problem7.js",
  // "./problems/problem8.js",
  // "./problems/problem9.js",
  // "./problems/problem10.js",
  // "./problems/problem11.js",
  // "./problems/problem12.js",
  // "./problems/problem13.js",
  // "./problems/problem14.js",
  // "./problems/problem15.js",
  // "./problems/problem16.js",
  // "./problems/problem17.js",
  // "./problems/problem18.js",
  // "./problems/problem19.js",
  // "./problems/problem20.js",
  // "./problems/problem21.js",
  // "./problems/problem22.js",
  // "./problems/problem23.js",
  // "./problems/problem24.js",
  // "./problems/problem25.js",
  "./problems/problem67.js",
];

/**
 * Iterate over each problem module, import it and execute the run function
 */
problems.forEach((problem) => {
  import(problem).then((module) => {
    module.run();
  });
});
