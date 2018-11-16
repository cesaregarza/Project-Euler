/**
 *  PROBLEM 25
 *  
 *  The Fibonacci sequence is defined by the recurrence relation:
 *  F_n = F_n−1 + F_n−2, where F_1 = 1 and F_2 = 1.
 *  Hence the first 12 terms will be:
 *  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
 *  1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12
 * 
 *  The 12th term, F12, is the first term to contain three digits.
 *  What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */
import {BigNumber} from 'bignumber.js'

const identity = [[new BigNumber(1), new BigNumber(0)], [new BigNumber(0), new BigNumber(1)]];
//Start matrix
const start = [[new BigNumber(1), new BigNumber(1)], [new BigNumber(1), new BigNumber(0)]];
//Initialize the memoization array with the start matrix. This will represent the initial state. The index of the array will represent the power of 2 used. So 0 is 2^0 = 1, so the start matrix taken to the first power. Index 1 is 2^1 = 2, so the 2nd index of the memoization array will be the start index taken to the 2nd power.
var memo = [start];

//Basic matrix multiplication. Takes two matrix inputs of sizes m * n and n * p. If the matrices don't agree on n, then the matrices are incompatible and cannot be multiplied together. Otherwise, it will output a matrix of size m * p.
const matrixMult = (mat1, mat2) => {
  //m = matrix 1 height, n = matrix 1 width
  let [m, n] = [mat1.length, mat1[0].length];
  //n1 = matrix 2 height, p = matrix 2 width
  let [n1, p] = [mat2.length, mat2[0].length];
  
  //If the two matrices don't have n = n, they're incompatible and thus we say we can't work with them
  if (n != n1) throw `error: incompatible matrices`;
  
  //initialize what will be the resulting array
  let arr = [];
  
  //Vertical for loop
  for (let i = 0; i < m; i++){
    //initialize the array containing the row
    let tempArr = [];
    
    //Horizontal for loop
    for (let j = 0; j < p; j++){
      //Initialize the total for resulting cell (i, j);
      let total = new BigNumber(0);
      
      //K for loop. Iterates n times
      for (let k = 0; k < n; k++){
        total = total.plus(mat1[i][k].times(mat2[k][j]));
      }
      
      //Push the total to the row
      tempArr.push(total);
    }
    
    //Push the row onto the resulting array
    arr.push(tempArr);
  }
  //Return the m * p matrix, in this case as a 2D array.
  return arr;
};

//Find A to the nth power.
const matrixExp = (pow) => {
  
  //List the binary representation as an array
  let pows = powersOfTwo(pow);
  
  //Instead of having to do log2(pow), we can just take the length and subtract 1. Reduces computations necessary.
  let startInd = pows.length - 1;
  
  //Start with the identity matrix. Multiplying any matrix by the identity matrix will return the first matrix. This ensures we can loop correctly.
  let total = identity;
  
  //loop through the values of powers we already have.
  for (let i = 0; i < pows.length; i++){
    //Check if the power of 2 we have is in the memoization array. If not, run the function to add it.
    if (!memo[startInd - i]){
      addToMemo(startInd - i);
    }
    
    //If the current array value is not zero, we multiply the total by A^pows[i]. This is simplified by calling on our memoization array.
    if (pows[i]){
      total = matrixMult(total, memo[startInd-i]);
    }
  }
  //returns a 2x2 array
  return total;
};

//Adds to the memoization array. No output.
const addToMemo = (ind) => {
  //Check if the previous power of 2 is in the memoization array. If not, we recurse the function with the previous power of 2 until we have filled our memoization array as necessary.
  if (!memo[ind - 1]){
    addToMemo(ind - 1);
  }
  
  //Calculate the new memoization value
  memo[ind] = matrixMult(memo[ind - 1], memo[ind - 1]);
  
  //log that we updated the memoization array
  console.log(`added memo index: ${2 ** ind}`);
};

//breaks down n to its constituent powers of two
const powersOfTwo = (num) => {
  let arr = [];
  //Here we just take the number, turn it into a binary string, split it to create it into an array and then use map to parse each int.
  let temp = num.toString(2).split('').map(x => parseInt(x));
  
  //Iterate through the resulting array. If the value is 1, we take 2 to the power of the value it's supposed to be at and push to the array. Otherwise, we push 0.
  for (let i = 0; i < temp.length; i++){
    if (temp[i]){
      arr.push(2 ** (temp.length - i - 1));
    } else {
      arr.push(0);
    }
  }
  //Return an array with n broken down into its constituent powers of two. Note that if you were to run arr.reduce((a, b) => a+b), you would end up with n.
  return arr;
};

const fibo = (n) => {
  if (n < 2) return new BigNumber("1");
  
  return matrixExp(n-1)[0][0];
};

function solution(){
    let i = 0;
    let q = new BigNumber(1);
    let x = new BigNumber(10).pow(1000);
    while(q.lt(x)){
        q = fibo(i++);
    }
    return i - 1;
}

console.time();
console.log(solution());
console.timeEnd();

/**
 *      SUBMITTED ON 2018/11/15
 *      CORRECT
 *      VALUE:      4782
 *      RUNTIME:    996.487ms
 */