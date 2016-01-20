describe("Secret", function() {
  it("Calculate prime numbers", function(){
    expect(isPrime(1)).to.be.false;
    expect(isPrime(2)).to.be.true;
    expect(isPrime(3)).to.be.true;
    expect(isPrime(5)).to.be.true;
    expect(isPrime(7)).to.be.true;
    expect(isPrime(13)).to.be.true;
    expect(isPrime(997)).to.be.true;
    expect(isPrime(1000)).to.be.false;

  });
});
