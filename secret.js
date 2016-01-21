#!/usr/bin/env node

var Additive = (function(){
  //takes the secret function and the int as an input and tests all combinations of primes below int
  var isAdditive = function(secret, int){
    if (int <= 2){
      throw "Invalid input";
    }
    var primes = allPrimesBelow(int);
    var additive = function(a, b){
      return secret.call(null, (a + b)) === secret.call(null, a) + secret.call(null, b);
    };
    for (var x = 0; x < primes.length; x++){
      for (var y = 0; y < primes.length; y++){
        if (!additive(x, y)){
          return false;
        }
      }
    }
    return true;
  };

  var allPrimesBelow = (function(){
    //stores mem to avoid recalculating if possible
    var mem = [];

    return function(int){
      //if primes already stored in mem, return the necessary subset
      if (mem[mem.length - 1] > int){
        for (var i = 0; i < mem.length; i++){
          if (mem[i] > int){
            return mem.slice(0, i - 1);
          }
        }
      }

      //object and array to store all primes below int
      var primesObj = {};
      var primes = [];

      //put all numbers between 2 and int in primesObj
      for (var y = 2; y < int; y++){
        primesObj[y] = y;
      }
      //now remove all multiples of each number (2 through int) from the list of primes
      for (var z = 2; z < int; z++){
        if (primesObj[z] !== undefined){
          var current = z;
          while (current < int){
            current += z;
            delete primesObj[current];
          }
        }
      }

      //build an array of primes
      for (var key in primesObj){
        primes.push(primesObj[key]);
        if(primesObj[key] > mem[mem.length - 1] || mem.length === 0){
          mem.push(primesObj[key]);
        }
      }

      //return array of primes
      return mem;
    };
  })();

  //the secret function to test
  var secret = function(int){
    return int * 2;
  };

  var result = isAdditive.call(null, secret, Number(process.argv[2]));
  console.log(result);
  return result;
})();
