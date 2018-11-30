/**
 *  PROBLEM 31
 *  In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
 *      1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 *  It is possible to make £2 in the following way:
 *      1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * 
 *  How many different ways can £2 be made using any number of coins?
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution(n){
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let dpArr = Array.from({length: n+1}, () => 0);

    for (let i in coins){
        let g = coins[i];
        for (let j in dpArr){
            if (j == g){
                dpArr[j]+= 1;
            }

            if (j > g){
                dpArr[j] += dpArr[j-g];
            }
        }
    }
    return dpArr[n];
}
//INPUT GOES HERE
let q = [200];

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
 *      SUBMITTED ON        2018/11/27
 *                          CORRECT
 *      VALUE:              73682
 *      RUNTIME:            0.306ms
 */