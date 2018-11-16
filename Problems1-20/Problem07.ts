/**
 *  PROBLEM 7
 *  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * 
 *  What is the 10 001st prime number?
 */
import {BigNumber} from 'bignumber.js'

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

    let arr = Array.from({length: 10}, () => 0);

    return p;
    
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE: 104743
 *      RUNTIME: 64.883ms
 */