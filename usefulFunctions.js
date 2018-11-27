/**
 * Find Divisors
 * @param {number} n Number you want to find divisors for
 * @returns {number[]} Returns array
 */
const divisors = (n) => {
    let arr = [1, n];
    let q = Math.floor(Math.sqrt(n));
    for (let i = 2; i < q; i++){
        if (n%i == 0){
            arr.push(i);
            arr.push(n/i);
        }
    }
    return arr;
};

/**
 * Digitize Sum
 * @param {number} n Number you want digitized
 * @returns {number}
 */
const digitizeSum = (n) => {
    let sum = 0;
    while (n){
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
};

/**
 * Zeller Congruence
 * @param {number} day Day in the month. So 1-31
 * @param {number} month Number of the month. 3-14, January = 13 and February = 14
 * @param {number} year Number of the year
 * @returns {number} Day of the week. 0 = Saturday, 1 = Sunday, etc.
 */
const Zeller = (day, month, year) => {
    let K = year%100;
    let J = Math.floor(year/100);
    return (day + Math.floor((13*(month+1)/5))+K+Math.floor(K/4)+Math.floor(J/4)+5*J)%7;
};

/**
 * Finds if the given year is a Leap year
 * @param {number} year The year
 * @returns {boolean} true or false
 */
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

/**
 * Gauss Summation - Finds sum of a sequence of numbers in constant time.
 * @param {number} upTo Number you want to find the summation up to
 * @param {number} base Multiplier. Defaults to 1
 * @returns {number}
 */
const summation = (upTo, base = 1) => {
    return (upTo + 1) * (upTo / 2) * base;
};

/**
 * Finds the Greatest Common Denominator between two given inputs, a and b.
 * @param {number} a First number
 * @param {number} b Second number
 * @returns {number} GCD of a and b
 */
const gcd = (a, b) => {
    if(!b) return a;
    return gcd(b, a%b);
};

/**
 * Seive of Eratosthenes implementation to find all primes up to n
 * @param {number} n Upper limit of Seive
 * @returns {number} Larget prime in seive target
 */
const primeSeive = (n) => {
    
    let bigArr = [];
    let count = 0;
    [bigArr[0], bigArr[1], bigArr[2]] = [0, 0, 1];
    count++;
    let p = 2;
    let r = 10 ** 6;
    let q = r / p;

    const markNotPrime = () => {
        for (let i = 1; i < q; i++){
            bigArr[i * p] = -1;
        }
    };

    const findNext = () => {
        while(bigArr[p] !== undefined) {
            p++;
        }
        if (bigArr[p] == -1) return;
        count++;
        bigArr[p] = 1;
        q = r / p;
    };

    while (count < n){
        markNotPrime();
        findNext();
    }

    return p;
    
};

/**
 * Merge Sort, sorts stuff fast
 */
const mergeSort = {
    /**
     * @method mergeSort.sort
     * @param {number[]} arr Array that will be sorted
     * @returns {number[]} sorted array
     */
    sort: function(arr){
        if (arr.length < 2) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);

        return this.merge(this.sort(left), this.sort(right));

    },
    /**
     * @method mergeSort.merge
     * @param {number[]} left
     * @param {number[]} right
     * @returns {number[]} Final, sorted and merged array
     */
    merge: function(left, right){
        let arr = [];
        while (left.length && right.length){
            if (left[0] > right[0]){
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }
        if (left.length){
            arr = [...arr, ...left];
        }
        if (right.length){
            arr = [...arr, ...right];
        }
        return arr;
    }
};

/**
 * Find period of repetition in the decimal equivalent of 1/n
 * @param {number} denom Denominator
 * @param {number} base Base in which we're calculating the period
 * @returns {number} The number which indicates period length
 */
const findPeriod = (denom, base = 10) => {
    let arr = [];
    let b = 1;
    let rem = -1;
    let num = base;
    while (1 > 0){
        rem = num % denom;
        if (rem == 0) return 0;
      
        if (arr.includes(rem)) break;
        arr.push(rem);
        num = rem * base;
    }
    return arr.length;
};

/**
 * Modular Inverse. Uses Euclid's Extended GCD algorithm to find the modular inverse.
 * @param {number} a a, the number we're finding the modular inverse of
 * @param {number} m m, the modulus we're using
 * @returns {number} returns the modular inverse to a, such that a * x = 1 (mod m)
 */
const modularInverse = (a, m) => {
    let mm = m;
    let x = 1;
    let y = 0;

    if (m == 1) return 0;

    while (a > 1){
        q = Math.floor(a / m);
        [a, m] = [m, a % m];
        [x, y] = [y, x - q * y];
    }

    x += x < 0 ? mm : 0;
    return x;
};

/**
 * 
 * @param {number} a a, number to find the smallest power of 2 larger than a
 * @param {number} b base. If blank, will default to two.
 * @returns {number} Power of 2
 */
const nextPowerOfb = (a, b = 2) => {
    let g = Math.ceil(Math.log(a)/Math.log(b));
    return 2 ** g;
};

const nextPowerOfb2 = (a, b=2) => {
    return Math.ceil(Math.log(a)/Math.log(b));
};

/**
 * Finds the coprimes of two numbers, a and b, given their divisors.
 * @param {number[]} a Sorted divisors of first number
 * @param {number[]} b Sorted divisors of second number
 * @returns {Set <number>} Returns a set of coprimes
 */
const coprimeSorted = (a, b) => {
    let difference = a
                 .filter(x => !b.includes(x))
                 .concat(b.filter(x => !a.includes(x)));
  
  return new Set(difference);
};

/**
 * Finds if a number is prime, returns true if it's prime false if not. O(sqrt(N))
 * @param {number} n number you want to evaluate if it's prime
 * @returns {boolean}
 */
const isPrime = (n) => {
  let m = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= m; i++) {
    if (n % i == 0) return false;
  }
  return true;
};