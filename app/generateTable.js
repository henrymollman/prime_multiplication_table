var GetPrimes = require('./getPrimes.js');
var getPrimes = new GetPrimes();

if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log('\n This script will create a table of ')
}

// if no arguments are specified in the command line, default to 10
var n = process.argv[2] || 10;
var sieve = process.argv[3] === "-sieve";

// unless 'sieve' is entered as the second argument in the CLI, use nPrimes
var method = sieve ? getPrimes.getPrimesUpToN : getPrimes.nPrimes;

var primes = method(n);

// the main event
console.log("\n" + getPrimes.createTable(primes));
