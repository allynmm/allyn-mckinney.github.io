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
    maleArray = filter(array, function(male) {

    } )
};

var femaleCount = function(array) {
    // return reduce(array, )
};

var oldestCustomer = function(array) {
    // var customerAges = [];
    // for (let i = 0; i < array.length; i++) {
    //     customerAges.push()
    // }
};

var youngestCustomer = function(array){

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
    for (let i = 0; i < array.length; i++){
        let customerTags = array[i].tags;
    }
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
