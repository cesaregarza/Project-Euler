/**
 *  PROBLEM 9
 *  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *                             a^2 + b^2 = c^2
 *  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *  Find the product abc.
 */
// import {BigNumber} from 'bignumber.js'

function solution(n){
    
    let sol = 1;
    let u = 1;
    let a, b, c;

    loop1:
    while (sol < 5000){
        u++;
        for (let v = 1; v < u; v++){
            let u2 = u ** 2;
            let v2 = v ** 2;
            [a, b, c] = [u2 - v2, 2 * u * v, u2 + v2];
            sol = a + b + c;
            if (sol === n) break loop1;
        }
    }
    return a * b * c;

}

//INPUT GOES HERE
let q = [1000];

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
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE:  31875000
 *      RUNTIME: 0.1771538ms
 */