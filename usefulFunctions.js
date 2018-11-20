/**
 * Find Divisors
 * @param {number} n Number you want to find divisors for
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
    return arr.length;
};

/**
 * Digitize Sum
 * @param {number} n Number you want digitized
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
 */
const Zeller = (day, month, year) => {
    let K = year%100;
    let J = Math.floor(year/100);
    return (day + Math.floor((13*(month+1)/5))+K+Math.floor(K/4)+Math.floor(J/4)+5*J)%7;
};

/**
 * Finds if the given year is a Leap year
 * @param {number} year The year
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
 */
const summation = (upTo, base = 1) => {
    return (upTo + 1) * (upTo / 2) * base;
};

/**
 * Finds the Greatest Common Denominator between two given inputs, a and b.
 * @param {number} a First number
 * @param {number} b Second number
 */
const gcd = (a, b) => {
    if(!b) return a;
    return gcd(b, a%b);
};

/**
 * Seive of Eratosthenes implementation to find all primes up to n
 * @param {number} n Upper limit of Seive
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
    
}