/**
 *  PROBLEM 23
 *  A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 *  For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *  
 *  A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
 *  
 *  As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
 *  By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
 *  However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
 * 
 *  Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution() {

  let upper = 20161;

  let arr = [];
  let hashmap = {};
  let sumOfAbundantsArr = [];

  let large = (upper + 1) * (upper / 2);

  for (var i = 1; i < upper; i++){
      
    for (let j = i << 1; j < upper; j += i){
        if (hashmap[`${j}`] == undefined){
            hashmap[`${j}`] = i;
        } else {
            hashmap[`${j}`] += i;
        }
    }

    if (hashmap[`${i}`] > i){
        arr.push(i);

        for (let j = 0; j < arr.length; j++){
            let sumOfAb = i + arr[j];
            if (sumOfAb > upper) break;
    
            if (sumOfAbundantsArr[sumOfAb] == undefined){
                sumOfAbundantsArr[sumOfAb] = true;
                large -= sumOfAb;
            }
        }
    }
    
  }

  return large;
  
}
//INPUT GOES HERE
let q = [0];

//TIME STUFF
let times = [];
let solutions = [];
for (let i = 0; i < 5; i++) {
  let hrStart = process.hrtime();
  let g = solution(...q);
  let hrEnd = process.hrtime(hrStart);
  times.push(hrEnd);
  solutions.push(g);
}
let tot = [0, 0];
for (let i in times) {
  tot[0] += times[i][0];
  tot[1] += times[i][1];
}
tot[0] /= 5;
tot[1] /= 5;
let g = solutions[0];

console.log(`Answer: ${g} Execution Time: ${tot[0]}s, ${tot[1]/1000000}ms`);

/**
 *      SUBMITTED ON        2018/11/21
 *                          CORRECT
 *      VALUE:              4179871
 *      RUNTIME:            16.446ms
 */