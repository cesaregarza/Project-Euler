/**
 *  PROBLEM 9
 *  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *                             a^2 + b^2 = c^2
 *  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *  Find the product abc.
 */
// import {BigNumber} from 'bignumber.js'

function solution(){
    
    let x = 20;
    let y = 500 / x - x;
    return (2 * x * y * (x ** 4 - y ** 4));
}

//INPUT GOES HERE
let q = [1000];

//TIME STUFF
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
console.log(times);


/**
 *      SUBMITTED ON        2018/11/14
 *                          CORRECT
 *      VALUE:              31875000
 *      RUNTIME:            11.498ms
 */

  /**
  *     UPDATED ON          2018/11/19
  *     VALUE:              31875000
  *     RUNTIME:            0.177ms
  */

  /**
   *    UPDATED ON          2019/8/23
   *    VALUE:              3187500
   *    RUNTIME:            0.03088ms
   */