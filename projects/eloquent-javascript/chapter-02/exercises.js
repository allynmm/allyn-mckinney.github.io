
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) { //num represents number of rows
  var hashtag = '#';

  for (var i = 1; i <= num; i++) {
    if (i < num) {
      console.log(hashtag.repeat(i) + '\n');
    } else if (i === num) {
      console.log(hashtag.repeat(i));
    } 
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, finish) {
  var count = start;
  while (count <= finish) {
   if (count % 3 === 0 && count % 5 === 0) {
    console.log('fizzbuzz');
   } else if (count % 3 === 0) {
    console.log('fizz');
   } else if (count % 5 === 0) {
    console.log('buzz');
   } else {
    console.log(count);
   }
   count++;
  }
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) { //x represents rows and columns
  var oddPiece = '# ';
  var evenPiece = ' #';
  var oddRow = oddPiece.repeat(x);
  var evenRow = evenPiece.repeat(x);
  var output = '';
  // use the array to create columns
  for (var i = 1; i <= x; i++) {
    //even columns
    if (i % 2 === 0 && i < x) {
      output += evenRow + '\n';
      //odd columns
    } else if (i % 2 !== 0 && i < x) {
      output += oddRow + '\n';
    } else if (i % 2 === 0 && i === x) {
      output += evenRow;
    } else if (i % 2 !== 0 && i === x) {
      output += oddRow;
    }
  }
  console.log(output);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
