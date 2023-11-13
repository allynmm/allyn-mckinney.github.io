// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// const { characterScript } = require("./helpers");

// const SCRIPTS = require("./scripts");

function flatten(array) {
  var copy = [];
  array.forEach((subArr) => {
    return subArr.forEach((item) => {
      return copy.push(item);
    });
  });
  return copy;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, stop, update, body) {
  // recursive??

  // base
  // if (test(value) === false){
  //   return;
  // };

  // recursion
  // body(value);
  // return update(value);
  // return loop(value, test, update, body);

  for (let i = start; stop(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  var testArr = [];
  for (let i = 0; i < array.length; i++){
    if (test(array[i])){
      testArr.push(array[i]);
    }
  }

  if (array.length === testArr.length){
    return true;
  } else {
    return false;
  }

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // var output = [];
  // let dirCountObj = {};
  // for (let i = 0; i < text.length; i++){
  //   //check the code of each character
  //   //see what script it belongs to
  //   //create a count
  //   // refer to code from topThreeTags (let-s-get-functional => index.js)
  //   for (let x = 0; x < SCRIPTS.length; x++)[
  //     if(text.codePoint(i) >= SCRIPTS.ranges.forEach)
  //   ]
  // }

  let ltr = [];
  let rtl = [];

  for (let i = 0; i < text.length; i++){
    // create a variable called script and assign it the result of invoking characterSCript on the current character's char code
    let script = characterScript(text.charCodeAt(i)); // let script = {...}

    // determine if script is not equal to null
    if (script !== null){
      if(script.direction === 'ltr'){
        ltr.push(script);
      }else {
        rtl.push(script);
      }
    }
  }

  if(ltr.length > rtl.length){
    return 'ltr';
  } else {
    return 'rtl';
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
