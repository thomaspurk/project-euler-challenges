# Project Euler Problems 1-100

Challenging and fun way to demonstrate and practice existing software develop skills and learn some new things!

![Sample Unit Testing Output](readme-screenshot.png "Sample Unit Testing Output")

## Introduction

[Project Euler](https://projecteuler.net/about) offers mathematical and computer programming challenges that encourages participants to develop new skills and find enjoyments in the world of mathematics.

## Progress

This code repository contains functions that produce correct solutions for the following checked problems. The goal is to learn new things and have more fun by adding new solutions over time!

|                       |                       |                       |                       |                       |                       |                       |                       |                       |                       |
| --------------------: | --------------------: | --------------------: | --------------------: | --------------------: | --------------------: | --------------------: | --------------------: | --------------------: | --------------------: |
|  :heavy_check_mark: 1 |  :heavy_check_mark: 2 |  :heavy_check_mark: 3 |  :heavy_check_mark: 4 |  :heavy_check_mark: 5 |  :heavy_check_mark: 6 |  :heavy_check_mark: 7 |  :heavy_check_mark: 8 |  :heavy_check_mark: 9 | :heavy_check_mark: 10 |
| :heavy_check_mark: 11 | :heavy_check_mark: 12 | :heavy_check_mark: 13 | :heavy_check_mark: 14 | :heavy_check_mark: 15 | :heavy_check_mark: 16 | :heavy_check_mark: 17 | :heavy_check_mark: 18 | :heavy_check_mark: 19 | :heavy_check_mark: 20 |
| :heavy_check_mark: 21 | :heavy_check_mark: 22 | :heavy_check_mark: 23 | :heavy_check_mark: 24 | :heavy_check_mark: 25 |                    26 |                    27 |                    28 |                    29 |                    30 |
|                    31 |                    32 |                    33 |                    34 |                    35 |                    36 |                    37 |                    38 |                    39 |                    40 |
|                    41 |                    42 |                    43 |                    44 |                    45 |                    46 |                    47 |                    48 |                    49 |                    50 |
|                    51 |                    52 |                    53 |                    54 |                    55 |                    56 |                    57 |                    58 |                    59 |                    60 |
|                    61 |                    62 |                    63 |                    64 |                    65 |                    66 | :heavy_check_mark: 67 |                    68 |                    69 |                    70 |
|                    71 |                    72 |                    73 |                    74 |                    75 |                    76 |                    77 |                    78 |                    79 |                    80 |
|                    81 |                    82 |                    83 |                    84 |                    85 |                    86 |                    87 |                    88 |                    89 |                    90 |
|                    91 |                    92 |                    93 |                    94 |                    95 |                    96 |                    97 |                    98 |                    99 |                   100 |

## Technologies

| Name          | Description |
| ------------- | ----------- |
| Runtime       | Node.js     |
| Language      | JavaScript  |
| Unit Testing  | vitest      |
| Comments      | JSDoc       |
| Documentation | Markdown    |
| IDE           | VS Code     |
| Platform      | MacOS       |
| Repository    | GitHub.com  |

## Limitations

Solving some questions requires working with JavaScript's 21 digit limit on integers. By default, any integer over 21 digits is converted to an exponent expression. This can make determining the correct solution impossible.

```javascript
let number21 = 10000000000000000000;
consol.log(number21);
// Prints: 10000000000000000000

let number22 = 1000000000000000000000;
console.log(number22);
// Prints: 1e+21
```

There are a number of ways around this issue all of which have some limitations. The [toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) function is very helpful for numbers containing upto 100 digits. But cannot be used accurately with larger numbers.

Therefore, some solutions in this project rely on the zsh shell's bc application. Executing this project on another platform would require editing the code for these functions. The command line statement is executed using the [Node.js Child](https://nodejs.org/api/child_process.html) Process module.

```javascript
// Example: Compute the a raised to the power of b
import cp from "child_process";
const result = cp.execSync(`bc --expression= ${a} ^ ${b}`);
```
