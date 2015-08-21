var GetPrimes = require('./getPrimes.js');
var getPrimes = new GetPrimes();

if (process.argv[2] === "-H" || process.argv[2] === "--help") {
  var help = "\nprime_multiplication_table \n" + 
"\nA node.js script to generate a command-line representation of a multiplication table made up of prime numbers\n" + 
"\n" + 
"# Installation on Linux\n" + 
"type `sudo apt-get install nodejs nodejs-dev npm` to install node if you have not done so. Once node is installed, clone the repo\n" +
"and install jasmine by typing `npm install` on the command line from the root directory.\n" +
"\n" +
"Then, run the script by typing the following command from the root directory:\n" +
"\n" +
"`node app/generateTable.js x [option]`\n" +
"\n" +
"Where x is the number of prime numbers to generate, or the range from 0- whatever is specified if the '-sieve' option is toggled.\n" +
"\n" +
"Use `node app/generateTable.js -H` or `--help` for information about the scripts parameters.\n" +
"\n" + 
"# Tests\n" + 
"Tests are located in the 'spec' subfolder, and can be run by typing\n" +
"\n" +
"`jasmine-node spec/`\n" +
"\n" +
"from the command line. If any tests fail, information will be provided.\n" +
"\n" +
"Thanks, and stay frosty\n"

  console.log(help);
}

else {

// if no arguments are specified in the command line, default to 10
var n = process.argv[2] || 10;
var sieve = process.argv[3] === "--sieve"|| process.argv[3] === "-S";

// unless 'sieve' is entered as the second argument in the CLI, use nPrimes
var method = sieve ? getPrimes.getPrimesUpToN : getPrimes.nPrimes;

var primes = method.call(getPrimes, n);

// the main event
console.log("\n" + getPrimes.createTable(primes));
}