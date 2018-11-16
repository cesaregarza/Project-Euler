/**
 *  PROBLEM 16
 *  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *  
 *  What is the sum of the digits of the number 2^1000?
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    const digitizeSum = (n: BigNumber) => {
        let sum = new BigNumber(0);
        while (n.isGreaterThan(0)){
            sum = sum.plus(n.mod(10))
            n = (n.minus(n.mod(10)).div(10));
        }
        return sum;
    }
    
    return digitizeSum(new BigNumber(2).pow(1000)).valueOf();
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/16
 *      CORRECT
 *      VALUE:      1366
 *      RUNTIME:    90.225ms
 */