/**
 *  PROBLEM 67
 *  By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *              3
               7 4
              2 4 6
             8 5 9 3
 * 
 *  That is, 3 + 7 + 4 + 9 = 23.
 *  Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.
 *  NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)
 */
//import {BigNumber} from 'bignumber.js'

var fs = require('fs');
var util = require('util');

//REMEMBER: FILL IN FILENAME HERE!!
let filename = "Problem67.txt";

async function solution() {

  const readFile = util.promisify(fs.readFile);

  async function getFile() {
    return await readFile(filename, 'utf8');
  }

  const pascalize = (triangle) => {
    return triangle.split('\n').map(x => x.trim().split(' ').map(y => parseInt(y)));
  };

  const dynProg = (arr) => {

    for (let j = 1; j < arr.length; j++) {
      for (let i = 0; i <= j; i++) {
        let [one, two] = [0, 0];
        if (i < j) {
          one = arr[j][i] + arr[j - 1][i];
        }
        if (i > 0) {
          two = arr[j][i] + arr[j - 1][i - 1];
        }
        arr[j][i] = Math.max(one, two);
      }
    }

    return arr;
  };

  const findMax = (arr) => {
    let max = 0;

    for (let i = 0; i < arr[arr.length - 1].length; i++) {
      let t = arr[arr.length - 1][i];
      if (t > max) {
        max = t;
      }
    }
    return max;
  };

  let max = await getFile()
    .then(x => pascalize(x))
    .then(x => dynProg(x))
    .then(x => findMax(x))
    .catch(err => console.error(err));

  return max;

}

//INPUT GOES HERE
let q = [0];

//TIME STUFF
async function timer() {
  let times = [];
  let solutions = [];
  for (let i = 0; i < 5; i++) {
    let hrStart = process.hrtime();
    let g = await solution(...q);
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
}
timer();

/**
 *      SUBMITTED ON    2018/11/14
 *                      CORRECT
 *      VALUE:          7273
 *      RUNTIME:        10.306ms
 */

 /**
  *     UPDATED ON      2018/11/20
  *     VALUE:          7273
  *     RUNTIME:        4.815ms
  */