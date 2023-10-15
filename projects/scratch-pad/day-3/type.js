// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // var valuetype = typeof value;

    if (Array.isArray(value) == true) {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    var valueType = typeof value;

    if (value !== null && valueType === 'object' && Array.isArray(value) != true && value instanceof Date != true) {
        return true
    } else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
var valueType = typeof value;

if (valueType === 'object' && value instanceof Date != true && value !== null) {
    return true
} else {
    return false
}

    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    var answer = typeof value;
    
    if (answer === 'object' && value instanceof Date != true && value !== null) {
        if (Array.isArray(value) === true) {
            answer = 'array';
        } else {
            answer = 'object'
        }
     } else if (value === null) {
        answer = 'null';
    } else if (answer === 'string') {
        answer = 'string'
    } else if (answer === 'number') {
        answer = 'number';
    } else if (answer === 'boolean') {
        answer = 'boolean';
    } else if (answer === 'function') {
        answer = 'function';
    } else if (value instanceof Date === true) {
        answer = 'date'
    }

    return answer;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
