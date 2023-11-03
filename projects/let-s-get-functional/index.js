// #!/usr/bin/env node

'use strict';

const { filter, reduce } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./allyn-mckinney.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var maleArray = _.filter(array, function(customer) {
        if (customer.gender === 'male'){
            return true;
        }
    } )
    return maleArray.length;
};

var femaleCount = function(array) {
   let females = _.reduce(array, function(acc, curr){
        if (curr.gender === 'female'){
            acc.push(curr,);
        }
        return acc;
    }, []);
    return females.length;
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(acc, current){
        if (acc.age > current.age){
            return acc;
        } else if (acc.age < current.age){
            return current;
        }
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, current){
        if (acc.age < current.age){
            return acc;
        } else if (acc.age > current.age){
            return current;
        }
    })
    return youngest.name;
};

var averageBalance = function(array) {
    var balanceSum = 0;
    for (let i = 0; i < array.length; i++) {
        var balanceNum = Number(array[i].balance.replace(/[,$]/g,''));
        balanceSum += balanceNum;
    }
    var avgBalance = balanceSum / array.length;
    return avgBalance;
};

var firstLetterCount = function(array, letter) {
    var letterCount = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i]['name'][0].toUpperCase() === letter.toUpperCase()) {
            letterCount++;
        }
    }
    return letterCount;
};

var friendFirstLetterCount = function(array, customer, letter) {
    var friendLetterCount = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i]['name'] === customer) {
            for (let x = 0; x < array[i].friends.length; x++){
                if (array[i].friends[x].name[0].toUpperCase() === letter.toUpperCase()){
                    friendLetterCount++;
                }
            }
        }
    }
    return friendLetterCount;
};

var friendsCount = function(array, name){
    var output = [];
    for (let i = 0; i < array.length; i++){
        if (name !== array[i].name){
            for (let x = 0; x < array[i].friends.length; x++){
                if (array[i].friends[x].name === name){
                    output.push(array[i].name)
                }
            }
        }
    }
    return output;
};

var topThreeTags = function(array){

    var output = [];
    let tagCountObj = {};
    for (let i = 0; i < array.length; i++){
        let tags = array[i].tags
        for (let x = 0; x < tags.length; x++) {
            if (!tagCountObj.hasOwnProperty(tags[x])) {
                tagCountObj[tags[x]] = 1;
            } else {
                tagCountObj[tags[x]]++;
            }
        }
    }

    let entries = [];
    for (let key in tagCountObj){
        entries.push([key, tagCountObj[key]]);
    }

    entries.sort(function(a, b){
        return b[1] - a[1];
    })

    for (let a = 0; a < 3; a++){
        output.push(entries[a][0]);
      };

    return output;
};

var genderCount = function(array){
    var maleCustomer = 0;
    var femaleCustomer = 0;
    var nonbinaryCustomer = 0;

    var customerGenders = {};

    for (let i = 0; i < array.length; i++){
        if (array[i]['gender'] === 'male'){
            maleCustomer++;
        } else if (array[i]['gender'] === 'female'){
            femaleCustomer++;
        } else if (array[i]['gender'] === 'non-binary'){
            nonbinaryCustomer++;
        }
    }

    customerGenders.male = maleCustomer;
    customerGenders.female = femaleCustomer;
    customerGenders['non-binary'] = nonbinaryCustomer;

    return customerGenders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
