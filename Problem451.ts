/**
 *  PROBLEM #
 *  
 * 
 * 
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    let total = 0;
    for (let i = 3; i < 2000; i++){
        let max = 0;
        for (let j = 1; j < i - 1; j++){
            let m = (j ** 2) % i;
            if (j > max  && m == 1){
                max = j;
            }
        }
        total += max;
    }

    return total;
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON
 *      CORRECT / INCORRECT
 *      VALUE:
 *      RUNTIME:
 */