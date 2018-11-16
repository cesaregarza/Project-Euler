/**
 *  PROBLEM 4
 *  A palindromic number reads the same both ways.
 *  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 *  Find the largest palindrome made from the product of two 3-digit numbers.
 */
import {BigNumber} from 'bignumber.js'

function solution(input: number | string | BigNumber, base: number | string | BigNumber){

    let n = new BigNumber(input);
    let b = new BigNumber(base);

    let max_palindrome = new BigNumber("0");
    let upper = b.pow(n).minus("1");
    let lower = b.pow(n.minus(1)).minus("1");

    for(let x = upper; x.gte(lower); x = x.minus(1)){
      for(let y = x; y.gte(lower); y = y.minus(1)){
        
        let z = x.times(y);

        let zPrime = z.toString(parseInt(b.valueOf()));

        if (z.gt(max_palindrome) && (zPrime == zPrime.split('').reverse().join(''))){
          max_palindrome = z;
        }
      }
    }
    //return the maximum as a string in the desired base
    return max_palindrome.toString(parseInt(b.valueOf()));
  }

  console.time();
  console.log(solution(3,10));
  console.timeEnd();

  /**
   *    SUBMITTED ON 2018/11/13
   *    CORRECT
   *    VALUE: 906609
   *    RUNTIME: 1116.188ms
   */