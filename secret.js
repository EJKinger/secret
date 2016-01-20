//takes the secret function and the int as an input and tests all combinations of primes below int
var test = function(secret, int){

};

//basic unoptimized, tests number for prime, returns boolean
var isPrime = function(num){
  if (num <= 1){
    return false;
  }
  if (num % 1 !== 0){
    return false;
  }
  for (i = num - 1; i >= 2; i--){
    if (num % i === 0){
      return false;
    }
  }
  return true;
};

var allPrimesBelow = function(int){
  //array to store all primes below int
  var primes = [];

  //loop through numbers below, see if it's prime
  for (var i = int - 1; i >= 1; i--){
    if (isPrime(i)){
      primes.push(i);
    }
  }

  //returns array of prime numbers below int
  return primes;
};