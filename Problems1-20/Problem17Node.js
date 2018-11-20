/**
 *  PROBLEM 17
 *  If the numbers 1 to 5 are written out in words: 
 *  one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *  
 *  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 */
// import {BigNumber} from 'bignumber.js'

function solution(){

    let oneToTwenty = {
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen"
    }
    let tens = {
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    }
    let tenArr = [90, 80, 70, 60, 50, 40, 30, 20];
    let big = {
        "1": "ten",
        "2": "hundred",
        "3": "thousand",
        "6": "million",
        "9": "billion",
        "12": "trillion"
    };

    const toWords = (n) => {
        let res = "";
        if (n > 100){
            let p = Math.floor(n / 100);
            if (n % 100 === 0){
                res += oneToTwenty[`${p}`] + `hundred`;
                return res;
            }
            res += oneToTwenty[`${p}`] + `hundredand`;
            n = n%100;
        } else if (n === 100){
            res += `onehundred`;
            return res;
        }
        if (n >= 20){
            for (let i = 0; i < tenArr.length; i++){
                if (n - tenArr[i] < 10 && n - tenArr[i] > 0){
                    res += tens[`${tenArr[i]}`];
                    n -= tenArr[i];
                    break;
                } else if (n - tenArr[i] === 0){
                    res += tens[`${tenArr[i]}`];
                    return res;
                }
            }
        }
        res += oneToTwenty[`${n}`];
        return res;
    };

    let total = 0;
    for (let i = 1; i < 1000; i++){
        let x = toWords(i);
        total += x.length;
    }
    total += `onethousand`.length;
    return total;
}

//INPUT GOES HERE
let q = [0];

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

/**
 *      SUBMITTED ON        2018/11/16
 *                          CORRECT
 *      VALUE:              21124
 *      RUNTIME:            5.321ms
 */

  /**
  *     UPDATED ON          2018/11/19
  *     VALUE:              21124
  *     RUNTIME:            1.500ms
  */