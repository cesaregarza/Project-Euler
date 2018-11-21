/**
 *  PROBLEM 21
 *  Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 *  If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 *  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
 *  The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220. 
 * 
 *  Evaluate the sum of all the amicable numbers under 10000.
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');

function solution(n){

    const properDivisors = (n) => {
        let arr = [1];
        let q = Math.floor(Math.sqrt(n));
        for (let i = 2; i < q; i++){
            if (n%i == 0){
                arr.push(i);
                arr.push(n/i);
            }
        }

        let tot = 0;
        for (let i in arr){
            tot += arr[i];
        }
        return tot;
    };

    let hashMap = {};
    let tot = 0;
    let arr = [];

    for (let i = 1; i < n; i++){
        let sumOfDivisors = properDivisors(i);
        
        if (hashMap[`${i}`] == undefined){
            if (hashMap[`${sumOfDivisors}`] == undefined){
                hashMap[`${sumOfDivisors}`] = {
                    'first': i,
                    'touched': false,
                    'value': sumOfDivisors
                };
            }
        } else {
            if (hashMap[`${i}`].first == sumOfDivisors){
                tot += i + sumOfDivisors;
                // arr.push([i, sumOfDivisors]);
            }
        }
    }
    // console.log(arr);
    return tot;
}
//INPUT GOES HERE
let q = [10000];

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
 *      SUBMITTED ON        2018/11/20
 *                          CORRECT
 *      VALUE:              31626
 *      RUNTIME:            4.715ms
 */