/**OPERATORS:
 * 
 * 0. Assign and reassign values
 * 
 * 1. Compare values
 * 
 * 2. Execute arithmetic operations
 * 
 * 3. Determine logic between variables or values
 * 
 * 4. Return values
 * 
 */

// ASSIGNMENT OPERATORS //
// 1. Assignment Operator //
// The = assignment operator assigns the value to the variable
    var name = 'Allyn'; // name now has the value of the string 'Allyn'

// 2. Addition Assignment //
// The += operator adds the value on the right side of the operator to the initial value and reassigns it the new value
    var a = 15;
    a += 10; // a now has the value of 25

// It can also be used for string concatenation
    var greeting = 'hello '
    greeting +=  'world!'; // greeting now has the value of 'hello world!'

// 3. Subtraction Assignment //
// The -= operator subtracts the value on the right from the initial value and reassigns it the new value
    var b = 5; // 5 - 2 = 3
    b -= 2; // b now has the value of 3

// 4. Multiplication Assignment //
// The *= operator multiplies the initial value by the value on the right of the operator and reassigns the product to the variable
    var c = 2; // 2 * 5 = 10
    c *= 5; // c now has the value of 10

// 5. Division Assignment //
// The /= operator divides the initial value by the value on the right of the operator and reassigns the quotient to the vairable
    var d = 100; // 100 / 8 = 12.5
    d /= 8 // d now has the value of 12.5

// 6. Remainder Operator //
// The %= operator divides the initial value by the value on the right of the operator and reassigns the remainder to the variable
    var e = 50; // 50/4 = 48 with a remainder of 2
    e %= 4; // e now has the value of 2

// 7. Exponentiation Operator //
// The **= operator raises the initial value to the power of the value to the right of the operator and reassigns the product to the variable
    var f = 3; // 3 ** 3 = 27
    f **= 3; // f now has the value of 27

// ARITHMETIC OPERATORS //
// 1. Addition Operator //
// The + operator adds values
    var g = 2 + 5; // g has the value of 7
    var stringConcatenation = 'Operation ' + 'Spark'// stringConcatenation has the value of 'Operation Spark

// 2. Subtraction Operator //
// The - operator subtracts values
    var h = 32 - 20; // h has the value of 12

// 3. Multiplication Operator //
// The * operator multiplies values
    var i = 9 * 7; // i has the value of 63

// 4. Division Operator //
// The / operator divides values
    var j = 48 / 6; // j has the value of 8

// 5. Remainder Operator //
// The % divides values and returns the remainder
    var k = 85 % 8; // k has a value of 5

// 6. Exponentiation Operator //
// The ** raises a value to the nth power
    var l = 2 ** 10; // l has the value of 1024

// 7. Increment Operator //
// The ++ operator adds 1 (increments) values
    var m = 6;
    var n = m++; // n has the value of 7

// 8. Decrement Operator //
// The -- operator subtracts 1 (decrements) values
    var o = 10;
    var p = o++; // p has the value of 9

// COMPARISON OPERATORS //
// 1. Equality Operator //
// The == operator uses type conversoin to compare 2 values and returns a Boolean value
    console.log(5 == '5'); // returns true

// 2. Strict Equality Operator //
// The === operator does not use type conversion to compare 2 values and returns a Boolean value
    console.log(5 === '5'); // returns false

// 3. Inequality Operator //
// The != operator compares 2 values to see if they are NOT equal (uses type conversion). if the values are not equal, it returns true
    console.log(5 != '5'); // returns false

// 4. Strict Inequality Operator //
// The !== compares 2 values to see if they are NOT equal (does not use type conversion)
    console.log(5 !== '5'); // returns true

// 5. Greater Than Operator //
// The > operator compares 2 values and returns a Boolean value. If the operand to the left is greater => false
    console.log(2 > 1); // returns true

// 6. Less Than Operator //
// The < operator compares 2 values and returns a Boolean value. If the operand to the left is less => false
    console.log(3092 < 29); //returns false

// 7. Greater Than or Equal to Operator //
// The >= operator compares 2 values to see if one is greater or of equal value and returns a Boolean value
    console.log(47 >= 50); // returns false

// 8. Less Than or Equal to Operator //
// The <= operator compares 2 values to see if one is lesser or of equal value and returns a Boolean value
    console.log(1738 <= 1738); // returns true

// LOGICAL OPERATORS //
// 1. Logical AND Operator //
// The && operator returns true only if the operands to the left and right are both true
    console.log(a > 5 && b > 10); // returns false

// 2. Logical OR Operator //
// The || operator returns true if only one of the operands is true
    console.log(g > 5 || l < 0); // returns true

// UNARY OPERATORS //
// 1. Logical NOT Operator //
// The ! operator flips the value of a Boolean

// 2. Typeof Operator //
// The typeof operator returns the general data type of a passed value

// 3. Unary Negation Operator //
// The - operator directly precedes its operand and negates it
    var q = -p; // q has the value of -9

// TERNARY OPERATOR //
// The ternay operator is a conditional operator which evaluates either of 2 expressions based on a provided conditional expression
//                                  SYNTAX => a ? b : c
//  a = condition,    b = code to run if condition is true,   c = code to run if condition is false



