/**
 *  PROBLEM 3
 * 
 *  The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 *  What is the largest prime factor of the number 600851475143?
 */

//  import {BigNumber} from 'bignumber.js';

 function solution(n){

    let div = 2;
    let upper = Math.sqrt(n);

    while (div <= upper && div < n){
        if (n == div) break;

        if(n % div == 0){
            n /= div;
            continue;
        }
        div++;
    }
    return n;
}

let times = [];
let solutions = [];
for (let i = 0; i < 5; i++){
    let hrStart = process.hrtime();
    let g = solution(600851475143);
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
  *     SUBMITTED ON 2018/11/13
  *     CORRECT
  *     VALUE: 6857
  *     RUNTIME: 1.1855442ms;
  */