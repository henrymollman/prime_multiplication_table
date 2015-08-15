# prime_multiplication_table
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

Thanks, and stay frosty
