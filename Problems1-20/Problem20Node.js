/**
 *  PROBLEM 20
 *  n! means n × (n − 1) × ... × 3 × 2 × 1
 *  For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 *  and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 * 
 *  Find the sum of the digits in the number 100!
 */
var BigNumber = require('bignumber.js');

function solution(){
    const digitizeSum = (n) => {
        let sum = new BigNumber(0);
        while (n.isGreaterThan(0)){
            sum = sum.plus(n.mod(10))
            n = (n.minus(n.mod(10)).div(10));
        }
        return sum;
    };

    let n = new BigNumber(1);
    for (let i = 1; i < 100; i++){
        n = n.times(i);
    }

    return digitizeSum(n);
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
 *      SUBMITTED ON    2018/11/16
 *      CORRECT
 *      VALUE:          648
 *      RUNTIME:        16.6182014ms
 */