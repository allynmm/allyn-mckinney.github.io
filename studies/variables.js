/** 
 * VARIABLES
 * 
 *  0. Variables can point to/hold on to values known as memory in programs. They are seen as labeled buckets that 
 * can contain values of any data types (string, number, boolean, etc.). Since variables do not *contain* values, they
 * can be reassigned to any value at any time.
 * 
 *  1. You create variables using one of the 3 keywords (var, let, const) followed by the name of your choosing (likely
 *  following the camelCase naming convention mainly used in JavaScript)
 * 
 *  2. There are 2 ways to create variables: declaration and initialization
 */

// 1. Declaration //
// To declare a variable, you will use the var or let keyword, followed by the name of the variable.
    var name;
// When declaring variables, there is no value assigned to it so if you were to log it to the console, it would return undefined

// 2. Initialization //
// The difference between declaration and initialization is that during initialization, you assign a value at declaration
    var myName = 'Allyn';
// Now if you were to log the myName variable, it would log 'Allyn' to the console

// 3. Var keyword
// The var keyword is one of the more commonly used keywords. It is either function or globally scoped. They are also
// reassignable 

// 4. Let keyword
// The let keyword can be globally, function, and block scoped.

// 5. Const keyword
// The const keyword can be either global, block, or function scoped as well but variables declared with const cannot
// be reassigned

// 6. Hoisting
// Before any code is executed, functions and variables declared with the var keyword (just the name, not the value) are brought
// up to the top of the program. This means that if you were to reference the value before passint it a value, you would get 
// undefined instead of a reference error
// 