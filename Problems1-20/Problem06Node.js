/**
 *  PROBLEM 6
 *  The sum of the squares of the first ten natural numbers is
 *  1^2 + 2^2 + ... + 10^2 = 385
 * 
 *  The square of the sum of the first ten natural numbers is,
 *  (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * 
 *  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
// import {BigNumber} from 'bignumber.js'

function solution(n){
    let nPlusOne = n + 1;
    let nOverTwo = n / 2;
    let twoNPlusOne = 2 * n + 1;
    
    let one = (nPlusOne * nOverTwo) ** 2;
    let two = n * nPlusOne * twoNPlusOne / 6;
    
    return one - two;
}

//INPUT GOES HERE
let q = [100];

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
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE: 25164150
 *      RUNTIME: 0.028368ms
 */