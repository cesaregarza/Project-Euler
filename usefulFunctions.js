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