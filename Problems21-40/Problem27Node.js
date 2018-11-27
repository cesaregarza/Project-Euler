/**
 *  PROBLEM 27
 *  Euler discovered the remarkable quadratic formula:
 *      n^2+n+41
 *  It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. 
 *  However, when n=40,40^2+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,41^2+41+41 is clearly divisible by 41.
 * 
 *  The incredible formula n^2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. 
 *  The product of the coefficients, −79 and 1601, is −126479.
 *  
 *  Considering quadratics of the form:
 *      n^2+a*n+b, where |a|<1000 and |b|≤1000
 *  where |n| is the modulus/absolute value of n (e.g. |11|=11 and |−4|=4)

 * Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
//var fs = require('fs');

function solution() {

//   const isPrime = (n) => {
//     let m = Math.floor(Math.sqrt(n));
//     for (let i = 2; i <= m; i++) {
//       if (n % i == 0) return false;
//     }
//     return true;
//   };

//   const longestConsPrimes = (fn, q) => {
//     let x = true;
//     let i = 0;
//     while (x) {
//       let j = fn(q, i++);
//       x = isPrime(j);
//     }
//     return i - 1;
//   };

//   let polynomial = (x, n) => {
//     return Math.pow(n, 2) - (2 * x + 79) * n + Math.pow(x, 2) + 79 * x + 1601;
//   };

  let polynomialX = (x) => {
    return [-79 - 2 * x, 1601 + 79 * x + Math.pow(x, 2)];
  };


  let lastAB = [];

  for (let i = -50; i < 0; i++) {
    var [a, b] = polynomialX(i);
    if (b > 1000 || b < -1000 || a > 1000 || a < -1000) break;
    lastAB = [a, b];
  }
  return lastAB[0] * lastAB[1];
}
//INPUT GOES HERE
let q = [0];

//TIME STUFF
let times = [];
let solutions = [];
for (let i = 0; i < 5; i++) {
  let hrStart = process.hrtime();
  let g = solution(...q);
  let hrEnd = process.hrtime(hrStart);
  times.push(hrEnd);
  solutions.push(g);
}
let tot = [0, 0];
for (let i in times) {
  tot[0] += times[i][0];
  tot[1] += times[i][1];
}
tot[0] /= 5;
tot[1] /= 5;
let g = solutions[0];

console.log(`Answer: ${g} Execution Time: ${tot[0]}s, ${tot[1]/1000000}ms`);

/**
 *      SUBMITTED ON        2018/11/26
 *                          CORRECT
 *      VALUE:              -59231
 *      RUNTIME:            0.0723ms
 */

 //https://www.jstor.org/stable/2975080