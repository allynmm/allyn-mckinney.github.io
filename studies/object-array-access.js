/**OBJECT AND ARRAY ACCESS
0. Objects and arrays are both collections of related data and are mutable meaning their values can be altered and can grow indefinitely. Another thing that objects and arrays have in common is that they can store values of any data type.

1. One of the main differences in these collections is how they are stored. Arrays are seen as lists and have values known as elements. These elements are enclosed in between square brackets [] and separated by commas.

2. Objects can be referred to as an associative array; both objects and arrays are both lists but objects values, known as properties, associations via key-value pairs, thus being stored in a structured way. These key-value pairs are enclosed between curly braces {} and also separated by commas.
*/

var colors = ['red', 'blue', 'purple', 'orange', true];

console.log(colors);

var aboutMe = {
  name: 'Allyn',
  age: 22,
  isCool: true,
  hobbies: ['video games', 'music', 'crafting']
}

console.log(aboutMe);

// ADDING VALUES //
// Objects
// You can add data to object in the same way you can access it's values with 2 different methods: bracket notation and dot notation

//bracket notation
aboutMe['zodiac'] = 'Taurus'; // the aboutMe object has a new zodiac: 'Taurus' property

// console.log(aboutMe);

//dot notation
aboutMe.pet = 'Nemo'; // the aboutMe object now has a new pet: "Nemo" property

// console.log(aboutMe);


// Arrays
// You can add elements to arrays by using one of the many inherent array methods such as .push() or .unshift() or even using bracket notation and passing the element's index
colors.push('black'); // adds to the end of colors
// console.log(colors);
colors.unshift('green'); // adds to the beginning of colors
// console.log(colors);
colors[colors.length] = 'pink'; // also adds to the end of colors
// console.log(colors);

// console.log(colors);

// REMOVING VALUES //
// Objects
// using the delete operator, followed by the property you wish to delete
delete aboutMe.zodiac // removes the zodiac property and will return undefined if logged
// console.log(aboutMe.zodiac);

// Arrays
// using many methods such as .pop(), .shift(), and .splice() to remove items from arrays
colors.pop(); // removes the last element from colors
// console.log(colors);
colors.shift(); // removes the first element from colors
// console.log(colors);
colors.splice(2, 0); // removes the 2nd index in colors
// console.log(colors);

// ACCESSING VALUES //
// Objects
// You use dot notation to access an object only when you know the literal name of the key you are trying to access in the object


// If the key name has a space you would use bracket notation or when passing a variable in place of the name of the key

// Arrays
// Elements are accessed by their index. Arrays are zero-indexed meaning the first elements position (index) begins with 0 and are accessed by using bracket notation