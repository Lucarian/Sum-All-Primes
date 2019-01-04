// -------------------------------------------------------------------------
// ( My Personal Symbols Legend: D&I === Declaration & Initialization )
// -------------------------------------------------------------------------


/**
 *  --------------------- FUNCTIONALITY SUMMARY ----------------------------
 * 
 *  --- A program that searches all numbers from '2' to the number passed as an argument
 *      to find all prime numbers and finally sums all prime numbers up.
 */

 
function sumPrimes(num) {
    
  let sum = 0;  // here the sum of all primes will bes stored.
  let temp = true;  // variable that stores the state of every number that is checked if prime.
  let primesArr = [];  // array where all primes are stored as distinguished elements.

  // -----------------------------------------------------------------------------------------------



  // Two nested 'for' Loops construct, used to check, store, and sum every prime number -------
  
  for (let j = 2; j <= num; j++) {  // for Loop that iterates through the range of numbers.
    
    for (let i = 2; i <= j/2; i++) {  // for Loop that checks if a number is prime.
      if (j % i === 0) {
        temp = false;
        break;
      }
    }
  
   if (temp === true) {  // if Conditional that sums and stores a number if prime.
    sum += j;
    primesArr.push(j);
  }
    
  temp = true; // Reseting of 'temp' variable for reuse.

  }

  console.log("\nThe chosen elements are: " + primesArr + "."); // Outputs the primes array.

  return sum;
}

console.log("\nThe sum is " + sumPrimes(15) + ".");  // Outputs the sum of the primes. The argument can be changed to any number.
