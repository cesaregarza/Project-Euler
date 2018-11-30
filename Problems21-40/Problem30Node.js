/**
 *  PROBLEM 30
 *  Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
 *  1634 = 1 ** 4 + 6 ** 4 + 3 ** 4 + 4 ** 4
 *  8208 = 8 ** 4 + 2 ** 4 + 0 ** 4 + 8 ** 4
 *  9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4
 *  
 *  As 1 = 1 ** 4 is not a sum it is not included.
 *  The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *  
 *  Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution(){
    let arr = Array.from({length: 10}, (x, i) => i ** 5);
    
    
}
//INPUT GOES HERE
let q = [0];

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
 *      SUBMITTED ON
 *      CORRECT / INCORRECT
 *      VALUE:
 *      RUNTIME:
 */