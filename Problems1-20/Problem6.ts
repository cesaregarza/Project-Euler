/**
 *  PROBLEM 6
 *  The sum of the squares of the first ten natural numbers is
 *  1^2 + 2^2 + ... + 10^2 = 385
 * 
 *  The square of the sum of the first ten natural numbers is,
 *  (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * 
 *  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    let n = new BigNumber(100);
    let nPlusOne = n.plus(1);
    let nOverTwo = n.div(2);
    let twoNPlusOne = n.times(2).plus(1);
    
    let one = nPlusOne.pow(2).times(nOverTwo.pow(2));
    let two = n.times(nPlusOne).times(twoNPlusOne).div(6);
    
    return one.minus(two).valueOf();
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE: 25164150
 *      RUNTIME: 6.639ms
 */