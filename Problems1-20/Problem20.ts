/**
 *  PROBLEM 20
 *  n! means n × (n − 1) × ... × 3 × 2 × 1
 *  For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 *  and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * 
 *  Find the sum of the digits in the number 100!
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
    let n = new BigNumber(1);
    for (let i = 1; i < 100; i++){
        n = n.times(i);
    }

    return digitizeSum(n);
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON    2018/11/16
 *      CORRECT
 *      VALUE:          648
 *      RUNTIME:        73.403ms
 */