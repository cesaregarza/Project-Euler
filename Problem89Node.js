/**
 *  PROBLEM 89
 *  For a number written in Roman numerals to be considered valid there are basic rules which must be followed. 
 * Even though the rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a particular number.
 *  For example, it would appear that there are at least six ways of writing the number sixteen:
 *  IIIIIIIIIIIIIIII
    VIIIIIIIIIII
    VVIIIIII
    XIIIIII
    VVVI
    XVI
 *  
 * However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.
 * 
 * The 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this problem.
 * 
 * Find the number of characters saved by writing each of these in their minimal form.  
 */
//import {BigNumber} from 'bignumber.js'
var fs = require('fs');
var util = require('util');

async function solution() {

  const romanToInt = function (s) {
    let roman = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }

    const compareRoman = (a, b) => {
      return roman[a] < roman[b];
    }

    if (s.length == 1) return roman[s];
    let total = 0;
    s = s.split('');

    for (var i = 0; i < s.length - 1; i++) {
      if (compareRoman(s[i], s[i + 1])) {
        total += -roman[s[i]] + roman[s[++i]];
        continue;
      } else {
        total += roman[s[i]];
      }
    }

    if (i < s.length) {
      total += roman[s[i]];
    }
    return total;

  };

  const intToRoman = function (num) {
    const roman = {
      "1": "I",
      "4": "IV",
      "5": "V",
      "9": "IX",
      "10": "X",
      "40": "XL",
      "50": "L",
      "90": "XC",
      "100": "C",
      "400": "CD",
      "500": "D",
      "900": "CM",
      "1000": "M"
    };

    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1].map(x => [x, 0]);

    let res = "";
    let i = 0;
    while (num) {
      if (Math.floor(num / values[i][0])) {
        num -= values[i][0];
        values[i][1]++;
      } else {
        i++;
      }
    }

    for (let i = 0; i < values.length; i++) {
      while (values[i][1]--) {
        res += roman[`${values[i][0]}`];
      }
    }

    return res;


  };

  const readFile = util.promisify(fs.readFile);

  async function getFile() {
    return await readFile('Problem089.txt', 'utf8');
  }

  const parse = (arr) => {
      let tot = 0;
    for (let i = 0; i < arr.length; i++) {
      tot += arr[i].length;
      let temp = romanToInt(arr[i]);
      let temp2 = intToRoman(temp);
      tot -= temp2.length;
    }
    return tot;
  };

  let total = await getFile()
    .then(data => data.split('\n'))
    .then(x => parse(x))
    .catch(err => console.error(err));

  return total;
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
 *      SUBMITTED ON    2018/11/15
 *                      CORRECT 
 *      VALUE:          743
 *      RUNTIME:        20.962ms
 */

 /**
  *     UPDATED ON      2018/11/20
  *     VALUE:          743
  *     RUNTIME:        6.372ms
  */