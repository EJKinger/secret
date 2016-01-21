//Specs not working in command line configuration

describe("Secret", function() {
  it("Calculates all primes below an int", function(){
    expect(Additive.allPrimesBelow(100)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    );
    expect(Additive.allPrimesBelow(103)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    );
    expect(Additive.allPrimesBelow(7)).to.deep.equal([2, 3, 5]);
  });
  //additive
  var secret1 = function(int){
    return int * 2;
  };

  var secret2 = function(int){
    return int / 2;
  };

  //non-additive
  var secret99 = function(int){
    return Math.pow(int, 2);
  };
  var secret98 = function(int){
    return Math.sqrt(int);
  };
  var secret97 = function(int){
    return int - 5;
  };

  it("Should detect additive functions", function(){
    expect(Additive.isAdditive(secret1, 100)).to.be.true;
    expect(Additive.isAdditive(secret2, 100)).to.be.true;
  });
  it("Should detect non-additive functions", function(){
    expect(Additive.isAdditive(secret99, 100)).to.be.false;
    expect(Additive.isAdditive(secret98, 100)).to.be.false;
    expect(Additive.isAdditive(secret97, 100)).to.be.false;
  });
});
