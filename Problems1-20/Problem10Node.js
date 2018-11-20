/**
 *  PROBLEM 10
 *  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 *  Find the sum of all the primes below two million.
 */
// import {BigNumber} from 'bignumber.js'

function solution(n){
    
    let bigArr = [];
    [bigArr[0], bigArr[1], bigArr[2]] = [0, 0, 1];
    let p = 2;
    let r = n;
    let q = r / p;
    let smallArr = [p];

    const markNotPrime = () => {
        for (let i = 1; i < q; i++){
            bigArr[i * p] = -1;
        }
    }

    const findNext = () => {
        while(bigArr[p] !== undefined) {
            p++;
        }
        bigArr[p] = 1;
        q = r / p;
        if (p != r){
            smallArr.push(p);
        }
    };

    while (p < r){
        markNotPrime();
        findNext();
    }

    let tot = 0;
    for (let i in smallArr){
        tot += smallArr[i];
    }
    return tot;
    
}

//INPUT GOES HERE
let q = [2000000];

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
 *      SUBMITTED ON        2018/11/14
 *                          CORRECT
 *      VALUE:              142913828922
 *      RUNTIME:            212.894ms
 */

  /**
  *     UPDATED ON          2018/11/19
  *     VALUE:              142913828922
  *     RUNTIME:            171.253ms
  */