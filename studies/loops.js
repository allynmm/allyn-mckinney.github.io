/** 
LOOPS

0. Designed to repeat code x amount of times
*/

// 1. For loops
// basic syntax
// for (start, stop, update){
//   code to execute;
// }

// Can be used to iterate through arrays and strings

// 2. For in loops
// basic syntax
// for (key in object){
//   console.log(key; // logs the keys within an object
//   console.log(object[key]); // logs all the values within an object
// }

// iterating forward through an array
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  //iterating backwards through an array
  for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  
  // Used to iterate through objects
  
  // 3. While loops
  // basic syntax
  // var count = 0;
  // while (count < 10){
  //   console.log(count);
  //   count++;
  // }
  
  // executes whatever code inside the code block as long as the condition is true