/**
 *  PROBLEM 22
 *  Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
 *  Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
 * 
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 * What is the total of all the name scores in the file?
 */

//var BigNumber = require('bignumber.js');
//var Decimal = require('decimal.js');
var fs = require('fs');
var util = require('util');

async function solution() {
  /**
   * Merge Sort, sorts stuff fast
   */
  const mergeSort = {
    /**
     * @method mergeSort.sort
     * @param {number[]} arr Array that will be sorted
     * @returns {number[]} sorted array
     */
    sort: function (arr) {
      if (arr.length < 2) return arr;

      let mid = Math.floor(arr.length / 2);
      let left = arr.slice(0, mid);
      let right = arr.slice(mid, arr.length);

      return this.merge(this.sort(left), this.sort(right));

    },
    /**
     * @method mergeSort.merge
     * @param {number[]} left
     * @param {number[]} right
     * @returns {number[]} Final, sorted and merged array
     */
    merge: function (left, right) {
      let arr = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          arr.push(left.shift());
        } else {
          arr.push(right.shift());
        }
      }
      if (left.length) {
        arr = [...arr, ...left];
      }
      if (right.length) {
        arr = [...arr, ...right];
      }
      return arr;
    }
  };
  const re = new RegExp(/[a-zA-Z]+/, "gi");
  const readFile = util.promisify(fs.readFile);

  async function getFile() {
    return await readFile('Problem22Names.txt', 'utf8');
  }

  const score = (s) => {
    let tot = 0;

    for (let i in s) {
      let g = s.charCodeAt(i) - 64;
      tot += g;
    }
    return tot;
  };

  let n = await getFile()
    .then(data => data.match(re))
    .then(x => mergeSort.sort(x))
    .then(x => x.map((y, i) => score(y) * (i + 1)))
    .then(x => {
      let tot = 0;
      for (let i in x) {
        tot += x[i];
      }
      return tot;
    })
    .catch(err => console.error(err));

  return n;
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
 *      SUBMITTED ON        2018/11/20
 *                          CORRECT
 *      VALUE:              871198282
 *      RUNTIME:            34.402ms
 */