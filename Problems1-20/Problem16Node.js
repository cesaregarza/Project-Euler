/**
 *  PROBLEM 16
 *  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *  
 *  What is the sum of the digits of the number 2^1000?
 */
var BigNumber = require('bignumber.js');

function solution(){
    const digitizeSum = (n) => {
        let sum = new BigNumber(0);
        while (n.isGreaterThan(0)){
            sum = sum.plus(n.mod(10));
            n = (n.minus(n.mod(10)).div(10));
        }
        return sum;
    };
    
    return digitizeSum(new BigNumber(2).pow(1000)).valueOf();
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
 *      SUBMITTED ON 2018/11/16
 *      CORRECT
 *      VALUE:      1366
 *      RUNTIME:    26.6913736ms
 */