/**
 *  PROBLEM 3
 * 
 *  The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 *  What is the largest prime factor of the number 600851475143?
 */

 import {BigNumber} from 'bignumber.js'

 function solution(input: number | string | BigNumber){
    let n = new BigNumber(input);

    let div = new BigNumber("2");
    let upper = n.squareRoot();

    while (div.lte(upper) && div.lt(n)){
        if (n.eq(div)) break;

        if(n.mod(div).eq(new BigNumber(0))){
            n = n.div(div);
            continue;
        }
        div = div.plus("1");
    }
    return n.valueOf();
 }

 console.time();
 console.log(solution(600851475143));
 console.timeEnd();

 /**
  *     SUBMITTED ON 2018/11/13
  *     CORRECT
  *     VALUE: 6857
  *     RUNTIME: 174.583ms
  */