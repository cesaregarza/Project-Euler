/**
 *  PROBLEM 5
 *  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    let g = 1;

    const gcd = (a, b) => {
        if(!b) return a;
        return gcd(b, a%b);
    }

    for (let i = 1; i <= 20; i++){
        g = (g * i) / gcd(i, g);
    }

    return g;
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/14
 *      VALUE: 232792560
 *      RUNTIME: 5.158ms
 */