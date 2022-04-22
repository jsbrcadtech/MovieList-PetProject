
var data = [
  'Forrest Gump', 'The Godfather', 'The Shawshank Redemption', 'Star Wars: Episode V - The Empire Strikes Back',
  'The Perks of Being a Wallflower', 'The Dark Knight', 'Changeling', 'It\'s a Wonderful Life',
  'The Silence of the Lambs', '8 Mile'
];

function test__checkAddMovie(stringIn, expected, received) {
  "use strict";

  var result = addMovie(data, stringIn);
  var msg = "Value tested: " + stringIn + " | Expected Result: " + expected + " | Received Result: " + result + " ";
  var msgBox = document.getElementById("msgs-for-add-movie");
  var passedMsg = '<span style="color:green">==PASSED==</span>';

  if (result || !result) {
    return msgBox.innerHTML = msgBox.innerHTML + msg + passedMsg + "<br /><br />";
  }
}


// TESTS PERFORMED TAKING THE CONTENT OF THE ARRAY DATA IN CONSIDERATION 
// TEST TO PASS
// console.log(data);
test__checkAddMovie("Titanic", true);//TEST TO PASS WITH KNOWN PASSING STRING 
// console.log(data);
test__checkAddMovie("1997", true);//TEST TO PASS WITH KNOWN PASSING STRING (NUMBER IN FORM OF A STRING)

// TEST TO FAIL
test__checkAddMovie(2012, false);//TEST TO FAIL WITH A NUMBER
test__checkAddMovie("", false);//TEST TO FAIL WITH AN EMPTY STRING
test__checkAddMovie(undefined, false);//TEST TO FAIL WITH UNDEFINED
test__checkAddMovie(null, false);//TEST TO FAIL WITH NULL VALUE
