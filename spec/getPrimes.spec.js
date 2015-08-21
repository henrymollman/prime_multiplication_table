var GetPrimes = require('../app/getPrimes.js');
var getPrimes = new GetPrimes();
console.log = function() {};

describe('Functions that should exist', function() {
  it('should have an \'nPrimes\' function', function() {
    expect(getPrimes.nPrimes).toEqual(jasmine.any(Function));
  });

  it('should have an \'getPrimesUpToN\' function', function() {
    expect(getPrimes.getPrimesUpToN).toEqual(jasmine.any(Function));
  });

  it('should have an \'createTable\' function', function() {
    expect(getPrimes.createTable).toEqual(jasmine.any(Function));
  });
});

describe('Function to generate prime numbers', function() {
  it('should return an array', function() {
    var primes = getPrimes.nPrimes(10);
    expect(primes).toEqual(jasmine.any(Array));
  });

  it('should return an array', function() {
    var primes = getPrimes.getPrimesUpToN(100);
    expect(primes).toEqual(jasmine.any(Array));
  });

  it('should return an array if no arguments are passed', function() {
    var primes = getPrimes.nPrimes();
    expect(primes).toEqual(jasmine.any(Array));
  });

  it('should return an array if no arguments are passed', function() {
    var primes = getPrimes.getPrimesUpToN();
    expect(primes).toEqual(jasmine.any(Array));
  });

  it('should return an array of prime numbers', function() {
    var primes = getPrimes.nPrimes(10);
    expect(primes).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
  });

  it('should return the same array of prime numbers', function() {
    var nPrimes = getPrimes.nPrimes(1000);
    var sievePrimes = getPrimes.getPrimesUpToN(7920);
    expect(nPrimes).toEqual(sievePrimes);
  });
});

describe('Output of get n primes table', function () {
    it('should output the following table as a string', function () {
      var primes = getPrimes.nPrimes(10);
      var table = "\n" + getPrimes.createTable(primes);

      var testTable = "\n" + "   x |    2 |    3 |    5 |    7 |   11 |   13 |   17 |   19 |   23 |   29\n\
   2 |    4 |    6 |   10 |   14 |   22 |   26 |   34 |   38 |   46 |   58\n\
   3 |    6 |    9 |   15 |   21 |   33 |   39 |   51 |   57 |   69 |   87\n\
   5 |   10 |   15 |   25 |   35 |   55 |   65 |   85 |   95 |  115 |  145\n\
   7 |   14 |   21 |   35 |   49 |   77 |   91 |  119 |  133 |  161 |  203\n\
  11 |   22 |   33 |   55 |   77 |  121 |  143 |  187 |  209 |  253 |  319\n\
  13 |   26 |   39 |   65 |   91 |  143 |  169 |  221 |  247 |  299 |  377\n\
  17 |   34 |   51 |   85 |  119 |  187 |  221 |  289 |  323 |  391 |  493\n\
  19 |   38 |   57 |   95 |  133 |  209 |  247 |  323 |  361 |  437 |  551\n\
  23 |   46 |   69 |  115 |  161 |  253 |  299 |  391 |  437 |  529 |  667\n\
  29 |   58 |   87 |  145 |  203 |  319 |  377 |  493 |  551 |  667 |  841\n\n"

        expect(table).toEqual(testTable);
    });
});
