/**
 * PROBLEM 2
 * 
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
 * By starting with 1 and 2, the first 10 terms will be:
 * 
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
 * find the sum of the even-valued terms.
 */

 import {BigNumber} from 'bignumber.js'

 function solution(){
    let cap: BigNumber = new BigNumber("4000000");

    let a = [new BigNumber("0"), new BigNumber("2")];
    let sum = new BigNumber("0");

    do{
        sum = sum.plus(a[1]);
        [a[0],a[1]] = [a[1], a[1].times(4).plus(a[0])];
    } while (a[1].lte(cap))

    return sum.valueOf();
 }

 console.time();
 console.log(solution());
 console.timeEnd();

 /**
  *     SUBMITTED ON 2018/11/13
  *     CORRECT
  *     VALUE: 4613732
  *     RUNTIME: 4.647ms
  */