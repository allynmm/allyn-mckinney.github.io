/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) {
    for (var i = 0; i < array.length; i++){
        if (string === array[i].name) {
            return array[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, name, replacement) {
    for (var i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            array.splice(array[i], 1, replacement);
        }
    }
    return array
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, name) {
    for (var i = 0; i < array.length;i++) {
        if (name === array[i].name) {
            array.splice(array[i], 1);
        }
    }
    return array
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, animal) {
    // step 1: iterate through aray to see if animal already exists
        // how do i keep track of whether i've found a match or not
    for (var i = 0; i < array.length; i++) {
        if(animal.name === array[i].name) {
            return false
        }
    }

    // step 2: if animal doesn't exist, validate data and add

    if(animal.hasOwnProperty('name') && animal.name.length > 0 && animal.hasOwnProperty('species') && animal.species.length > 0) {
        array.push(animal);
        return array
    }

}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
