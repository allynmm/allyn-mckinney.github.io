/** 
FUNCTIONS

0. Functions are tools used to produce values

1. Reusable blocks of code
*/

// IN order to use the function, you must call/invoke it and pass it arguments if the function is written with parameters
  // The difference between paramters and arguments is that parameters act as placeholders for whatever values will be passed when it is time for the function to be called. Arguments are what take the place of the parameters at call time

// basic syntax for named functions
function print (message) {
    console.log(message);
  };
  
  // assigning functions to variables
  var add = function (x, y) {
    return x + y;
  };
  
  // We can specify what inputs to take and what outputs to return inside the code block
    // If you want your function to only work on collections, you write your code to only work with those data types. The same can be said for the output. You can prewrite what your output is supposed to look like in the beginning of your code and by following the return keyword
  
  // Closures
  // Closure is when a function returns variables from an outer scope and keeps them alive