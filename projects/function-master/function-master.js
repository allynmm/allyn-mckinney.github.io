//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var objectKeys = Object.keys(object)
    var output = objectKeys.join(' ');
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var output = '';
    var objectValues = Object.values(object);
    for (var i = 0; i < objectValues.length; i++) {
        if (typeof objectValues[i] == 'string' && i < objectValues.length -1) {
            output += objectValues[i] + ' ';
        } else if (typeof objectValues[i] == 'string' && i === objectValues.length - 1) {
          output += objectValues[i];
        }
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    var valueType = typeof collection

    if (Array.isArray(collection) === true) {
        return 'array';
    } else if (valueType === 'object' && valueType instanceof Date !== true && collection !== null && Array.isArray(collection) !== true) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var splitString = string.split('');
    splitString.splice(0, 1, splitString[0].toUpperCase());
    var capFirst = splitString.join('');
    return capFirst;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //break string of words into an array of words
    var storageString = '';
    var storageArray = [];
    var wordsToWord = string.split(' ');
    //loop into the array to get each word to modify
    for (var i = 0; i < wordsToWord.length; i++) {
        var word = wordsToWord[i]; //word
        //split word into an array to modify the first letter
        var letters = word.split('');
        //replace the first letter w/ a capitalized version
        letters.splice(0, 1, letters[0].toUpperCase());
        //join the word w/ the first letter capitalized
        var capFirst = letters.join('');
        storageArray.push(capFirst);
        storageString = storageArray.join(' ');
    }
    return storageString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var userName = object.name;
    var splitName = userName.split('');
    splitName.splice(0, 1, splitName[0].toUpperCase());
    var greetingName = splitName.join('');
    return "Welcome "  + greetingName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var objName = object.name;
    var objSpecies = object.species;
    var splitName = objName.split('');
    var splitSpecies = objSpecies.split('');
    splitName.splice(0, 1, splitName[0].toUpperCase());
    splitSpecies.splice(0, 1, splitSpecies[0].toUpperCase());
    var msgName = splitName.join('');
    var msgSpecies = splitSpecies.join('');

    return "" + msgName + " is a " + msgSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var output = '';
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        var noises = object.noises;
        for (var i = 0; i < noises.length; i++) {
            if (i < noises.length - 1) {
                output += noises[i] + ' ';
            } else if (i === noises.length - 1) {
                output += noises[i];
            }
        }
        return output;
    } else if (!object.hasOwnProperty(noises)) {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arrOfStrings = string.split(' ');
    for (var i = 0; i < arrOfStrings.length; i++) {
        var testString = arrOfStrings[i];
        if (testString === word) {
            return true;
        }
    }

    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // validate object data
    if (object.hasOwnProperty('friends') !== true && Array.isArray(object.friends) !== true && object.friends.length > 0 !== true) {
        return false
    }
    
    // iterate through object.friends array to see if name argument exists in object.friends array
        // exit if name is found in the array  
    for (var i = 0; i < object.friends.length; i++) {
        if (name === object.friends[i]) {
            return true
        }
    }

    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}