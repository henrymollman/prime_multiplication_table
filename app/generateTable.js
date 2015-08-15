var GetPrimes = require('./getPrimes.js');
var getPrimes = new GetPrimes();

if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log('\n # prime_multiplication_table
A node.js script to generate a command-line representation of a multiplication table made up of prime numbers

# Installation on Linux
type `sudo apt-get install nodejs nodejs-dev npm` to install node if you have not done so. Once node is installed, clone the repo 
and install jasmine by typing `npm install` on the command line from the root directory.

Then, run the script by typing the following command from the root directory:

`node app/generateTable.js x [option]`

Where x is the number of prime numbers to generate, or the range from 0- whatever is specified if the "-sieve" option is toggled.

Use `node app/generateTable.js -h` or `--help` for information about the scripts parameters.

# Tests
Tests are located in the "spec" subfolder, and can be run by typing

`jasmine-node spec/`

from the command line. If any tests fail, information will be provided.

Thanks, and stay frosty');
}

else {

// if no arguments are specified in the command line, default to 10
var n = process.argv[2] || 10;
var sieve = process.argv[3] === "-sieve";

// unless 'sieve' is entered as the second argument in the CLI, use nPrimes
var method = sieve ? getPrimes.getPrimesUpToN : getPrimes.nPrimes;

var primes = method(n);

// the main event
console.log("\n" + getPrimes.createTable(primes));
}