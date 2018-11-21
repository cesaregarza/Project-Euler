/**
 *  PROBLEM 4
 *  A palindromic number reads the same both ways.
 *  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 *  Find the largest palindrome made from the product of two 3-digit numbers.
 */
// import {BigNumber} from 'bignumber.js'

function solution(n, b){

    let max_palindrome = 0;
    let upper = (b ** n) - 1;
    let lower = (b ** n) / 2;

    for(let x = upper; x >= lower; x--){
      for(let y = x; y>= lower; y--){
        
        let z = x * y;

        let zPrime = z.toString(b);

        if (z > max_palindrome && (zPrime == zPrime.split('').reverse().join(''))){
          max_palindrome = z;
        }
      }
    }
    //return the maximum as a string in the desired base
    return max_palindrome.toString(b);
  }

  let q = [3, 10];

  let times = [];
  let solutions = [];
  for (let i = 0; i < 5; i++){
      let hrStart = process.hrtime();
      let g = solution(...q);
      let hrEnd = process.hrtime(hrStart);
      times.push(hrEnd);
      solutions.push(g);
  }
  let tot = [0, 0];
  for (let i in times){
      tot[0] += times[i][0];
      tot[1] += times[i][1];
  }
  tot[0] /= 5;
  tot[1] /= 5;
  let g = solutions[0];
  
  console.log(`Answer: ${g} Execution Time: ${tot[0]}s, ${tot[1]/1000000}ms`);

  /**
   *    SUBMITTED ON        2018/11/13
   *                        CORRECT
   *    VALUE:              906609
   *    RUNTIME:            1116.188ms
   */

  /**
  *     UPDATED ON          2018/11/19
  *     VALUE:              906609
  *     RUNTIME:            52.239ms
  */
 
 /**
  *     UPDATED ON          2018/11/20
  *     VALUE:              906609
  *     RUNTIME:            22.858ms
  */