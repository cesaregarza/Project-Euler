/**
 *  PROBLEM 451
 *  Consider the number 15.
 *  There are eight positive numbers less than 15 which are coprime to 15: 1, 2, 4, 7, 8, 11, 13, 14.
 *  The modular inverses of these numbers modulo 15 are: 1, 8, 4, 13, 2, 11, 7, 14
 *  because
 *          1*1 mod 15=1
 *          2*8=16 mod 15=1
 *          4*4=16 mod 15=1
 *          7*13=91 mod 15=1
 *          11*11=121 mod 15=1
 *          14*14=196 mod 15=1
 * 
 *  Let I(n) be the largest positive number m smaller than n-1 such that the modular inverse of m modulo n equals m itself.
 *  So I(15)=11.
 *  Also I(100)=51 and I(7)=1.
 * 
 *  Find ∑I(n) for 3≤n≤2·107
 */

//import {BigNumber} from 'bignumber.js'

function solution() {

  const modularInverse = (a, m) => {
    let mm = m;
    let x = 1;
    let y = 0;

    if (m == 1) return 0;

    while (a > 1) {
      q = Math.floor(a / m);
      [a, m] = [m, a % m];
      [x, y] = [y, x - q * y];
    }

    x += x < 0 ? mm : 0;
    return x;
  };

  let upper = 2 * 10 ** 7;
  let hashmap = {};
  let tot = 0;

  for (let i = 1; i < upper; i++) {

    for (let j = i << 1; j < upper; j += i) {
      if (hashmap[`${j}`] == undefined) {
        hashmap[`${j}`] = [1, i];
      } else {
        hashmap[`${j}`].push(i);
      }
    }
    let t = new Set(hashmap[i]);
    let max = 1;

    for (let j = 2; j < i - 1; j++) {
      if (t.has(j)) continue;
      let g = modularInverse(j, i);
      if (g == j && g > max){
          max = g;
      }
    }
    tot += max;
  }

  return tot;
}

//INPUT GOES HERE
let q = [0];

//TIME STUFF
let times = [];
let solutions = [];
for (let i = 0; i < 1; i++) {
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
 *      SUBMITTED ON
 *      CORRECT / INCORRECT
 *      VALUE:
 *      RUNTIME:
 */