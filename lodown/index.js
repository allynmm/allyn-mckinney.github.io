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
 * first: Designed to loop through the <array> and return the first <number> elements passed as arguments in 
 * an array or the single element if the <number> is only 1. If no number is passed, it returns the first 
 * element of the array. If no array is passed, it returns an empty array.
 * 
 * @param {Array}: the array to loop through
 * @param {Number}: determines how many elements to return
 * 
 * @returns {Array}: array of first <number> of elements in the <array>
 */

function first(array, number) {
    var output = [];

    if (!Array.isArray(array)) {
        return [];
    } else if (!number || number === NaN) {
        return array[0];
    } else if (number > array.length) {
        return array;
    }else {
        for (let i = 0; i < number; i++) {
            output.push(array[i]);
        }
        return output;
    }
}
module.exports.first = first;

//last documentation
/**
 * last: Designed to loop through the given array and return the last <number> elements passed as arguments in 
 * an array or the single element if the <number> is only 1. If no number is passed, it returns the lasst 
 * element of the array. If no array is passed, it returns an empty array.
 * 
 * @param {Array}: the array to loop though
 * @param {Number}: determines how many elements to return
 * 
 * @returns {Array}: array of last <number> of elements in an array
 */

function last(array, number) {
    var output = [];
    if (!Array.isArray(array)) {
        return [];
    } else if (!number || number === NaN) {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        for (let i = array.length - number; i < array.length; i++) {
            output.push(array[i]);
        }
        return output;
    }
}
module.exports.last = last;

// indexOf documentation
/**
 * indexOf: Designed to return the index of the first occurrance of the passed value in the array
 * 
 * @param {Array}: The array we're iterating through
 * @param {Any value}: The value we're searching/testing for in the array
 * 
 * @returns {Number}: The index of which the value first occurs in the array
 */
function indexOf(array, value){
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

//contains documentation
/**
 * contains: Designed to test if the passed value is contained in the passed array
 * 
 * @param {Array}: The array to test for the value
 * @param {Any value}: The value we're searching/testing for in the array
 * 
 * @returns {Boolean}: Returns a boolean value depending on if the value is in the array or not
 */
function contains(array, value){
    var hasValue = false;
    for (var i = 0; i < array.length; i++) {
       (array[i] === value ? hasValue = true : hasValue);
    }
    return hasValue;
}
module.exports.contains = contains;

// each documentation
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
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
module.exports.each = each;

//unique documentation
/**
 * unique: Designed to create a new array with all duplicates removed from the given array.
 * 
 * @param {Array}: The array in which to iterate through and remove any duplicates
 * 
 * @returns {Array}: Returns a new array with only unique elements from the passed array
 */
function unique(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (!output.includes(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
}
module.exports.unique = unique;

// filter documentation
/**
 * filter: Designed to return a new array of data based on the result of the passed function.
 * 
 * @param {Array}: The array to interate through
 * @param {Function}: The function to test each iteration
 * 
 * @returns {Array}: A new array containing only the elements from the result of testing each
 * element of the passed array.
 */
function filter(array, func) {
    var output = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            output.push(array[i]);
        }
    }
    return output;
}
module.exports.filter = filter;

// reject documentation
/**
 * reject: Designed to return an array of each element that returned falsy as a result of calling
 * the passed function.
 * 
 * @param {Array}: The array to iterate through and test
 * @param {Function}: The function that is called for each iteration of the passed array
 * 
 * @returns {Array}: Returns an array of each element that did not passed the test from the passed
 * function.
 */
function reject(array, func){
    var falsyArray = [];
    for (let i = 0; i < array.length; i++) {
       if(!func(array[i], i, array)) {
        falsyArray.push(array[i]);
       }
    }
    return falsyArray;
}
module.exports.reject = reject;

// partition documentation
/**
 * partition: Deisnged to return an array of subarrays; one that contains elements that returned truthy
 * as a result of the passed function and one of the elements that returned falsy as a result of the of
 * the passed function.
 * 
 * @param {Array}: The array to iterate through and test each element of
 * @param {Function}: The function to call for each element and return the elements that either passed 
 * or failed.
 * 
 * @returns {Array}: Returns an array of 2 subarrays; the first containing each element that passed as
 * a result of the passed function and the second of the elements that returned falsy as a result of the
 * passed function.
 */
function partition(array, func){
    var truthyArray = [];
    var falsyArray = [];
    var output = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            truthyArray.push(array[i]);
        } else if (!func(array[i])) {
            falsyArray.push(array[i]);
        }
    }
    output.push(truthyArray, falsyArray);
    return output;
}

//map documentation
/**
 * map: Designed to return an array of each modified element as a result of calling the passed function
 * on each iteration of the passed collection
 * 
 * @param {Array or Object} collection: The collection to itersate through
 * @param  {Function}: The function to test each iteration of the passed collection
 * 
 * @returns {Array}: Returns an array of the returned value of the fubction called to each iteration of 
 * the passed collection.
 */
function map(collection, func) {
    var output = [];
    // if collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++){
            output.push(func(collection[i], i, collection));
        }
    } else { //else it's an object
        for (let key in collection) {
            output.push(func(collection[key], key, collection));
        }
    }
    return output;
}
module.exports.map = map;

// pluck documentation
/**
 * pluck: Designed to return an array containing the value of the passed property for every element in
 * the passed array
 * 
 * @param {Array}: An array of objects to iterate through
 * @param {Any value} propery: The property to return the values of from each iteration of the passed
 * array of objects
 * 
 * @returns (Array): Returns an array containing the value of property for each element in the array
 * of objects.
 */
function pluck(array, property){
    return _.map(array, function(object){
        return object[property];
    });
}
module.exports.pluck = pluck;