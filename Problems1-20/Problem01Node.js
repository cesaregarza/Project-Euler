/**
 *  PROBLEM 1
 *  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *  Find the sum of all the multiples of 3 or 5 below 1000.
 */
//import {BigNumber} from 'bignumber.js'

 function solution(n){
    

    n--;
    let arr = [3, 5, 15];

    let nums = arr.map( x => Math.floor(n/x));

    const summation = (upTo, base) => {
        return (upTo + 1) * (upTo / 2) * base;
    };

    nums = nums.map( (x, i) => summation(x, arr[i]) );

    nums[2] = - nums[2];

    return nums[0] + nums[1] + nums[2];
 }

 let q = [1000];

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
  *     SUBMITTED ON        2018/11/13
  *                         CORRECT
  *     VALUE:              233168
  *     RUNTIME:            6.934ms
  */

  /**
  *     UPDATED ON          2018/11/19
  *     VALUE:              233168
  *     RUNTIME:            0.062ms
  */