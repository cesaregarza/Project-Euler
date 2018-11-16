/**
 *  PROBLEM 19
 *  You are given the following information, but you may prefer to do some research for yourself.
 *  
 *  1 Jan 1900 was a Monday.
 *  Thirty days has September,
 *  April, June and November.
 *  All the rest have thirty-one,
 *  Saving February alone,
 *  Which has twenty-eight, rain or shine.
 *  And on leap years, twenty-nine.
 *  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * 
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    const Zeller = (q, m, year) => {
        let K = year%100;
        let J = Math.floor(year/100);
        return (q + Math.floor((13*(m+1)/5))+K+Math.floor(K/4)+Math.floor(J/4)+5*J)%7;
    }
    let count = 0;

    for (let i = 1901; i <= 2000; i++){
        for (let j = 3; j <= 14; j++){
            if (j == 3 && i == 1901){
                for (let k = 0; k < 2; k++){
                    if (Zeller(1, 13 + k, i) == 1)count++;
                }
            } else if (j == 13 && i == 2000) break;
            if (Zeller(1, j, i) == 1) count++;
        }
    }
    return count;
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON        2018/11/16
 *      CORRECT
 *      VALUE:              171
 *      RUNTIME:            6.107ms
 */