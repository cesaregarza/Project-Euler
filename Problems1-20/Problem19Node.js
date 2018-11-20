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
// import {BigNumber} from 'bignumber.js'

function solution(){
    const Zeller = (q, m, year) => {
        let K = year%100;
        let J = Math.floor(year/100);
        return (q + Math.floor((13*(m+1)/5))+K+Math.floor(K/4)+Math.floor(J/4)+5*J)%7;
    };
    let count = 0;

    let nLeap = [1, 2, 2, 2, 1, 3, 1];
    let leap = [1, 3, 2, 1, 2, 2, 1];

    const isLeap = (year) => {
        if (year % 4) return false;
        if (year % 100 == 0){
          if (year % 400 == 0){
            return true;
          } else {
            return false;
          }
        }
        return true;
    };

    for (let i = 1901; i <= 2000; i++){
        if (isLeap(i)){
            count += leap[Zeller(1, 1, i)];
        } else {
            count += nLeap[Zeller(1, 1, i)];
        }
    }
    return count;
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
 *      CORRECT
 *      VALUE:              171
 *      RUNTIME:            0.0991288ms
 */