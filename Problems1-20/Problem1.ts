/**
 *  PROBLEM 1
 *  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *  Find the sum of all the multiples of 3 or 5 below 1000.
 */
import {BigNumber} from 'bignumber.js'

 function solution(input: number | string | BigNumber){
    let n = new BigNumber(input);

    n = n.minus(1);
    let arr = [new BigNumber("3"), new BigNumber("5"), new BigNumber("15")];

    let nums = arr.map( x => n.idiv(x));

    const summation = (upTo: BigNumber, base: BigNumber) => {
        return upTo.plus("1").times(upTo.div("2")).times(base);
    }

    nums = nums.map( (x, i) => summation(x, arr[i]) );

    nums[2] = nums[2].times("-1");

    return nums.reduce( (a, b) => a.plus(b), new BigNumber("0") );
 }

 console.time();
 console.log(solution(1000).valueOf());
 console.timeEnd();

 /**
  *     SUBMITTED ON 2018/11/13
  *     CORRECT
  *     VALUE: 233168
  *     RUNTIME: 6.934ms
  */