/**
 *  PROBLEM 9
 *  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *                             a^2 + b^2 = c^2
 *  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *  Find the product abc.
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    
    let sol = new BigNumber(1);
    let u = new BigNumber(1);
    let a, b, c;

    loop1:
    while (sol.lt(5000)){
        u = u.plus(1);
        for (let v = new BigNumber(1); v.lt(u); v = v.plus(1)){
            let u2 = u.pow(2);
            let v2 = v.pow(2);
            [a, b, c] = [u2.minus(v2), u.times(2).times(v), u2.plus(v2)]
            sol = a.plus(b).plus(c);
            if (sol.isEqualTo(1000)) break loop1;
        }
    }
    return a.times(b).times(c).valueOf();

}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE:  31875000
 *      RUNTIME: 11.498ms
 */