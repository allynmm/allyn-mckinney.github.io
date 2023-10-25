'use strict';

// YOU KNOW WHAT TO DO //

//Documentation

// identity documentation
/**
 * identity: Takes in a value and returns the value unchanged
 * @param { Any value }: Function takes in any value.
 * 
 * @returns { Any value }: Function returns the value unchanged
 */
function identity(value) {
    return value;
};

module.exports.identity = identity;

//typeOf doccumentation
/**
 * typeOf: Takes in any value and returns the type of the value as a string
 * @param { Any value }: Function takes in any values.
 * 
 * @returns { String }: Function returns the type of the value as a string
 */
function typeOf(value) {
    var answer = typeof value;
    
    if (answer === 'object' && value instanceof Date != true && value !== null) {
        if (Array.isArray(value) === true) {
            return 'array';
        } else {
            return 'object';
        }
     } else if (value === null) {
        return 'null';
    } else if (answer === 'string') {
        return 'string';
    } else if (answer === 'number') {
        return 'number';
    } else if (answer === 'boolean') {
        return 'boolean';
    } else if (answer === 'function') {
        return 'function';
    } else if (value instanceof Date === true) {
        return 'date';
    }

    return answer;
};

module.exports.typeOf = typeOf;

// first documentation
/**
 * first: 
 */

// each documentation
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/**
 * _.each = function(collection, func) {
    //if collection is an array
    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection); //invoking the function on each element in the array
        }
    } else { //else its an object
        for (let key in collection) {
            func(collection[key], key, collection); // invoking function on each value in the array
        }
    }
}
 */
module.exports.each = each;
