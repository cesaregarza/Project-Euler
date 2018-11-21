/**
 *  PROBLEM 24
 *  A permutation is an ordered arrangement of objects. 
 *  For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
 *  If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
 *  The lexicographic permutations of 0, 1 and 2 are:
 *         012   021   102   120   201   210
 *  
 *  What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution(n){
    n--;
    const genFactorials = (n) => {
        let arr = [1];
        for (let i = 1; i < n; i++){
            arr.push(arr[arr.length - 1] * i);
        }
        return arr;
    };

    const remove = (n) => {
        nums.splice(n,1);
    };

    let factorials = genFactorials(11);
    let nums = Array.from({length: 10}, (x, i) => i);
    let output = "";

    while (nums.length > 2){
        let p = Math.floor(n / factorials[nums.length - 1]);
        output += nums[p];
        n -= p * factorials[nums.length - 1];
        remove(p);
    }
    if (n%2){
        output += `${nums[1]}${nums[0]}`;
    } else {
        output += `${nums[0]}${nums[1]}`;
    }

    return output;
}
//INPUT GOES HERE
let q = [1000000];

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
 *      SUBMITTED ON        2018/11/21
 *                          CORRECT
 *      VALUE:              2783915460
 *      RUNTIME:            0.080ms
 */