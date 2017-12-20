function isPrime(num) {
  for (var n = 2; n < num; n++) {
    if (num % n === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var total = 2;
  for (var n = 3; n <= num; n++) {
    if (isPrime(n)) {
      total += n;
    }
  }
  return total;
}
//Input is a Number
//Output is the sum of Prime Numbers plus the argument(a number)

//Step one, use For Loop to console.Log each interger inside of Input.

// test if this number a prime
// if/else statement to test Interger inside of the Input
// test: Intergers of Input must be greater than 1
// test: Interger is divisible by 1 and itself 
// test: Interger is 
// test Interger is not divisible by 4

//IF the number is divisible by 2 and 3 and 4 then it is not a prime and dont push to Array


//Prime numbers are:
//greater than one (number > 1)
//have only two divisors: the number 1 and the number itself and no other numbers.
// num > 1
// num / num 
// num / anyOtherNumber != interger


// if (num > 1 && num / num === 1 && num / 2 !== )
console.log("2", isPrime(2));
console.log("5", isPrime(5));
console.log("4", isPrime(4));
console.log("21", isPrime(21));

sumPrimes(10);

