/**
 *  PROBLEM 26
 *  A unit fraction contains 1 in the numerator. 
 *  The decimal representation of the unit fractions with denominators 2 to 10 are given:
 *  1/2	    = 	0.5
 *  1/3	    = 	0.(3)
 *  1/4	    = 	0.25
 *  1/5	    = 	0.2
 *  1/6	    = 	0.1(6)
 *  1/7	    = 	0.(142857)
 *  1/8	    = 	0.125
 *  1/9	    = 	0.(1)
 *  1/10	= 	0.1
 *  Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. 
 *  It can be seen that 1/7 has a 6-digit recurring cycle.
 * 
 *  Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution(){
    const primeSeive = (n) => {
    
        let bigArr = [];
        let primeArr = [];
        [bigArr[0], bigArr[1], bigArr[2]] = [0, 0, 1];
        let p = 2;
        let r = 1000;
        let q = r / p;
    
        const markNotPrime = () => {
            for (let i = 1; i <= q; i++){
                bigArr[i * p] = -1;
            }
        };
    
        const findNext = () => {
            while(bigArr[p] !== undefined && p < n) {
                p++;
            }
            if (bigArr[p] == -1) return;
            count++;
            bigArr[p] = 1;
            primeArr.push(p);
            q = r / p;
        };
    
        while (p < n){
            markNotPrime();
            findNext();
        }
    
        return primeArr;
        
    };

    const findPeriod = (denom, base = 10) => {
        let arr = [];
        let rem = -1;
        let num = base;
        while (1 > 0){
            rem = num % denom;
            if (rem == 0) return 0;
          
            if (arr.includes(rem)) break;
            arr.push(rem);
            num = rem * base;
        }
        return arr.length;
    };

    let primes = primeSeive(999);
    let max = [0,0];

    for (let i in primes){
        let l = primes.length - i - 1;
        let d = findPeriod(primes[l]);

        if (d == primes[l] - 1){
            return primes[l];
        }
    }
    return max[1];
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
 *      SUBMITTED ON        2018/11/22
 *                          CORRECT
 *      VALUE:              983
 *      RUNTIME:            21.896ms
 */

 /**
  *     UPDATED ON          2018/11/22
  *     VALUE:              983
  *     RUNTIME:            1.946ms
  */