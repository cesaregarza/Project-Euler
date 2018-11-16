/**
 *  PROBLEM 10
 *  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 *  Find the sum of all the primes below two million.
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    
    let bigArr = [];
    [bigArr[0], bigArr[1], bigArr[2]] = [0, 0, 1];
    let p = 2;
    let r = 2000000;
    let q = r / p;
    let smallArr = [p];

    const markNotPrime = () => {
        for (let i = 1; i < q; i++){
            bigArr[i * p] = -1;
        }
    }

    const findNext = () => {
        while(bigArr[p] !== undefined) {
            p++
        }
        bigArr[p] = 1;
        q = r / p;
        if (p != r){
            smallArr.push(p);
        }
    }

    while (p < r){
        markNotPrime();
        findNext();
    }

    return smallArr.reduce((a, b) => a+b);
    
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE: 142913828922
 *      RUNTIME: 212.894ms
 */