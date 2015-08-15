var PrimesTable = function() {};

// the normal get n primes function will populate an array with prime numbers until it reaches the specified amount
PrimesTable.prototype.nPrimes = function(n) {
  primes = [];
  current = 2;

// this method is used to find prime numbers if a specific number of primes is needed
  function isPrime(number) {
    var end = Math.sqrt(number);
    for (var i = 0; i < primes.length; i++) {
      if (primes[i] > end) break;
      if (number % primes[i] === 0) return false;
    }
  
  return true;
  }

  while (primes.length < n) {
    if (isPrime(current)) {
      primes.push(current);
    }
    current++;
  }

  return primes;
};

// the sieve of eratosthenes will be used if all primes up to n are needed
PrimesTable.prototype.getPrimesUpToN = function(n) {

  var n = n || 100;
  var arr = [0];
  var i = 2;
  var sqrt = Math.sqrt(n);

  while (i <= n) {
    arr[i] = 1;
    i++;
  }

  i = 2;

  while (i < sqrt) {
    var j = i * i;
    while (j <= n) {
      arr[j] = 0;
      j += i;
    }
    i++;
  }

  var result = [],
      index = 2;

  console.log(iddqd);

  for (; index <= n; index++) {
    if (arr[index]) result.push(index);
  }
  
  return result;
};

// this function will generate all of the values to fill the cells in the multiplication table with values
PrimesTable.prototype.generateTableValues = function(primes, index) {
  var num = primes[index],
      values = [num];

  for (i = 1; i < primes.length + 1; i++) {
    values[i] = primes[i - 1] * num;
  }
  return values;
};

// this function renders the values from the above function into a string with uniform widths among cells
PrimesTable.prototype.renderRow = function (inputArray, width) {
  var rowArray = [],
      len = inputArray.length;
      i, 
      whiteSpace = " ";

  for (i = 0; i < len; i++) {
    rowArray[i] = inputArray[i].toString();
    while (rowArray[i].length < width) rowArray[i] = whiteSpace + rowArray[i];
  }
  return rowArray.join(" | ");
};

// this function is called in the command line script to call generateTableValues and renderRow 
// and return a string to be logged to the console
// the function also checks the length of the array of primes and renders additional tables if necessary
PrimesTable.prototype.createTable = function(primesArray) {

  if (primesArray.length > 10) {
    return this.createLargeTable(primesArray);
  }
  var primes = primesArray.slice();
  var primesTable = this;
  var width = (primes[primes.length - 1] * primes[primes.length - 1]).toString().length + 1;

  var tableValues = primes.map(function(item, index) {
    return primesTable.generateTableValues(primes, index);
  });


  var table = tableValues.map(function(item) {
    return primesTable.renderRow(item, width);
  });
  
  primes.unshift('x');
  
  table.unshift(primesTable.renderRow(primes, width));

  return table.reduce(function(acc, item) {
    return acc + item + "\n"
  }, "");
};

// this function will be called by createTable if the table would be too large to be rendered in the console
PrimesTable.prototype.createLargeTable = function(primesArray) {
  var count = primesArray.length;
  var tableString = "";
  var y = 0, x = 10;

  while (count > 0) {
    count = count - 10;
    tableString = tableString + "\n" + this.createTable(primesArray.slice(y, x)) + "\n";
    y = x;
    x = x + 10;
  }
  return tableString;
}

// export the object for use by node
module.exports = PrimesTable;

// cheat code
var iddqd = "\n\
 _      _      _             _ \n\
(_)    | |    | |           | |\n\
 _   __| |  __| |  __ _   __| |\n\
| | / _` | / _` | / _` | / _` |\n\
| || (_| || (_| || (_| || (_| |\n\
|_| \\__,_| \\__,_| \\__, | \\__,_|\n\
                     | |       \n\
                     |_|       "


