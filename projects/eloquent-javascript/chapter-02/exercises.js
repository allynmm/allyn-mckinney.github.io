
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) { //num represents number of rows
  var hashtag = '#';

  for (var i = 1; i <= num; i++) {
      console.log(hashtag.repeat(i));
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
  var oddPiece = '#';
  var evenPiece = ' ';

  //the first row will start w a space and the following row will start w  a #

  // use a for loop to create an odd row
  var oddRow = '#';
  for (var i = 1; i <= x - 1; i++) {
    if (i % 2 === 0) {
      oddRow += oddPiece;
    } else {
      oddRow += evenPiece;
    }
  }
  // console.log(oddRow);
  //use another for loop to create an even row
  var evenRow = " ";
  for (var a = 1; a <= x - 1; a++) {
    if (a % 2 === 0) {
      evenRow += evenPiece;
    } else {
      evenRow += oddPiece;
    }
  }
  // console.log(evenRow);
  // return;

  //create a final loop to be able to switch the rows
  var output = '';
  var count = 0;
  while (count < x) {
    if (count % 2 === 0 && count < x) {
      output += evenRow + '\n';
    } else if (count % 2 !== 0 && count < x) {
      output += oddRow + '\n';
    } else if (count % 2 === 0 && count === x) {
      output += evenRow;
    } else if (count % 2 !== 0 && count === x) {
      output += oddRow;
    }
    count++;
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
