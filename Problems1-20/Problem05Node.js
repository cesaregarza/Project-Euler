/**
 *  PROBLEM 5
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
// import {BigNumber} from 'bignumber.js'

function solution(n){
    let g = 1;

    const gcd = (a, b) => {
        if(!b) return a;
        return gcd(b, a%b);
    };

    for (let i = 1; i <= n; i++){
        g = (g * i) / gcd(i, g);
    }

    return g;
}

let q = [20];

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
 *      SUBMITTED ON        2018/11/14
 *      VALUE:              232792560
 *      RUNTIME:            5.158ms
 */

  /**
  *     UPDATED ON          2018/11/19
  *     VALUE:              232792560
  *     RUNTIME:            0.034ms
  */