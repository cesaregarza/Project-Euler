/**
 *  PROBLEM 81
 *  
 * In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.
 * 
 *  131 673 234 103 018
 *  201 096 342 965 150
 *  630 803 746 422 111
 *  537 699 497 121 956
 *  805 732 524 037 331
 * 
 *  Find the minimal path sum, in matrix.txt (right click and "Save Link/Target As..."), a 31K text file containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.
 */
//import {BigNumber} from 'bignumber.js'
var fs = require('fs');
var util = require('util');

//REMEMBER: FILL IN FILENAME HERE!!
let filename = "Problem81.txt";

async function solution() {

  const readFile = util.promisify(fs.readFile);

  async function getFile() {
    return await readFile(filename, 'utf8');
  }

  const minPath = (grid) => {
    for (var j = 0; j < grid.length; j++) {
      for (var i = 0; i < grid[0].length; i++) {
        if (j == 0 && i == 0) continue;

        let [above, right] = [Infinity, Infinity];

        if (j > 0) {
          above = grid[j][i] + grid[j - 1][i];
        }
        if (i > 0) {
          right = grid[j][i] + grid[j][i - 1];
        }

        grid[j][i] = Math.min(above, right);
      }
    }
    return grid[j - 1][i - 1];
  };

  let grid = await getFile()
    .then(x => x.split('\n').map(y => y.split(',').map(z => parseInt(z))))
    .then(x => minPath(x))
    .catch(err => console.error(err));

  return grid;
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
 *      VALUE:          427337
 *      RUNTIME:        8.966ms
 */

 /**
  *     UPDATED ON      2018/11/20
  *     VALUE:          427337
  *     RUNTIME:        5.355ms
  */