/**
 *  PROBLEM 25
 *  
 *  The Fibonacci sequence is defined by the recurrence relation:
 *  F_n = F_n−1 + F_n−2, where F_1 = 1 and F_2 = 1.
 *  Hence the first 12 terms will be:
 *  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
 *  1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12
 * 
 *  The 12th term, F12, is the first term to contain three digits.
 *  What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */
import {BigNumber} from 'bignumber.js'
import {Decimal} from 'decimal.js'

function solution(){
    let n = new Decimal(10).pow(999).minus(1);
    let phi = new Decimal(1).plus(new Decimal(5).sqrt()).div(2);

    let x = n.ln();
    let y = (new Decimal(5).ln()).div(2);
    let z = phi.ln();

    let w = x.plus(y);
    return w.divToInt(z).plus(1).valueOf();
    
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/15
 *      CORRECT
 *      VALUE:      4782
 *      RUNTIME:    996.487ms
 */

 /**
  *     UPDATED ON 2018/11/16
  *     VALUE:      4782
  *     RUNTIME:    7.234ms
  */