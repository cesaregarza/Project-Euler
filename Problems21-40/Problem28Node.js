/**
 *  PROBLEM 28
 *  Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 *         21 22 23 24 25
 *         20  7  8  9 10
 *         19  6  1  2 11
 *         18  5  4  3 12
 *         17 16 15 14 13
 * 
 *  It can be verified that the sum of the numbers on the diagonals is 101.
 *  What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution(n){
    n = (n - 1) / 2;
    return Math.ceil((2/3) * n * ( 8 * (n ** 2) + (15 * n) + 13) + 1);
}
//INPUT GOES HERE
let q = [1001];

//TIME STUFF
let times = [];
let solutions = [];
for (let i = 0; i < 5; i++){
    let hrStart = process.hrtime();
    let g = solution(...q);
    let hrEnd = process.hrtime(hrStart);
    times.push(hrEnd);
    solutions.push(g);
}
let tot = [0, 0];
for (let i in times){
    tot[0] += times[i][0];
    tot[1] += times[i][1];
}
tot[0] /= 5;
tot[1] /= 5;
let g = solutions[0];

console.log(`Answer: ${g} Execution Time: ${tot[0]}s, ${tot[1]/1000000}ms`);

/**
 *      SUBMITTED ON        2018/11/26
 *                          CORRECT
 *      VALUE:              669171001
 *      RUNTIME:            0.032ms
 */