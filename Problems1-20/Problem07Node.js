/**
 *  PROBLEM 7
 *  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * 
 *  What is the 10 001st prime number?
 */
// import {BigNumber} from 'bignumber.js'

function solution(){
    
    let bigArr = [];
    let count = 0;
    [bigArr[0], bigArr[1], bigArr[2]] = [0, 0, 1];
    count++;
    let p = 2;
    let r = 10 ** 6;
    let q = r / p;

    const markNotPrime = () => {
        for (let i = 1; i < q; i++){
            bigArr[i * p] = -1;
        }
    }

    const findNext = () => {
        while(bigArr[p] !== undefined) {
            p++
        }
        count++;
        bigArr[p] = 1;
        q = r / p;
    }

    while (count < 10001){
        markNotPrime();
        findNext();
    }

    return p;
    
}

//INPUT GOES HERE
let q = [10001];

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
 *      VALUE: 104743
 *      RUNTIME: 54.0520016ms
 */