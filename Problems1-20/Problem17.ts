/**
 *  PROBLEM 17
 *  If the numbers 1 to 5 are written out in words: 
 *  one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *  
 *  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 */
import {BigNumber} from 'bignumber.js'

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
    }
    let bigArr = [1, 2, 3, 6, 9, 12];

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
    }

    let total = 0;
    for (let i = 1; i < 1000; i++){
        let x = toWords(i);
        total += x.length;
    }
    total += `onethousand`.length;
    return total;
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON    2018/11/16
 *      CORRECT
 *      VALUE:          21124
 *      RUNTIME:        5.321ms
 */