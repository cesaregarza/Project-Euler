/**
 *  PROBLEM #
 *  
 * 
 * 
 */
//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
var fs = require('fs');
var util = require('util');
//REMEMBER: FILL IN FILENAME HERE!!
let filename = "";

async function solution() {
  const readFile = util.promisify(fs.readFile);

  async function getFile() {
    return await readFile(filename, 'utf8');
  }

  let n = await getFile();
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
 *      SUBMITTED ON
 *      CORRECT / INCORRECT
 *      VALUE:
 *      RUNTIME:
 */