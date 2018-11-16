/**
 *  PROBLEM 18
 *  By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *              3
               7 4
              2 4 6
             8 5 9 3
 * 
 *  That is, 3 + 7 + 4 + 9 = 23.
 *  Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.
 *  NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
 */
import {BigNumber} from 'bignumber.js'

function solution(){
    let triangle = `75
    95 64
    17 47 82
    18 35 87 10
    20 04 82 47 65
    19 01 23 75 03 34
    88 02 77 73 07 63 67
    99 65 04 28 06 16 70 92
    41 41 26 56 83 40 80 70 33
    41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
    70 11 33 28 77 73 17 78 39 68 17 57
    91 71 52 38 17 14 91 43 58 50 27 29 48
    63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`

    let pascal = triangle.split('\n').map(x => x.trim().split(' ').map(y => parseInt(y)));

    for (let j = 1; j < pascal.length; j++){
        for (let i = 0; i <= j; i++){
            let [one, two] = [0, 0];
            if (i < j){
                one = pascal[j][i] + pascal[j - 1][i];
            }
            if (i > 0){
                two = pascal[j][i] + pascal[j - 1][i - 1];
            }
            pascal[j][i] = Math.max(one, two);
        }
    }
    let max = 0;

    for (let i = 0; i < pascal[pascal.length - 1].length; i++){
        let t = pascal[pascal.length - 1][i];
        if (t > max){
            max = t;
        }
    }

    return max;

}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/14
 *      CORRECT
 *      VALUE:      1074
 *      RUNTIME:    4.527ms
 */
