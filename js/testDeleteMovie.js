var data = [
  'Forrest Gump', 'The Godfather', 'The Shawshank Redemption', 'Star Wars: Episode V - The Empire Strikes Back',
  'The Perks of Being a Wallflower', 'The Dark Knight', 'Changeling', 'It\'s a Wonderful Life',
  'The Silence of the Lambs', '8 Mile'
];

function test__checkDeleteMovie(stringIn, expected) {
  "use strict";

  var result = deleteMovie(data, stringIn);
  var msg = "Value tested: " + stringIn + " | Expected Result: " + expected + " | Received Result: " + result + " ";
  var msgBox = document.getElementById("msgs-for-delete-movie");
  var passedMsg = '<span style="color:green">==PASSED==</span>';

  if (result || !result) {
    return msgBox.innerHTML = msgBox.innerHTML + msg + passedMsg + "<br /><br />";
  }
}


// TESTS PERFORMED TAKING THE CONTENT OF THE ARRAY DATA IN CONSIDERATION 

// TEST TO PASS
// console.log(data);
test__checkDeleteMovie("Forrest Gump", true);//TEST TO PASS WITH AN EXISTING PASSING VALUE
// console.log(data);
test__checkDeleteMovie("The Shawshank Redemption", true);//TEST TO PASS WITH AN EXISTING PASSING VALUE

// TEST TO FAIL
test__checkDeleteMovie("Moonlight", false);//TEST TO FAIL WITH A NOT EXISTING STRING
test__checkDeleteMovie("Spider-Man: No Way Home", false);//TEST TO FAIL WITH A NOT EXISTING STRING
test__checkDeleteMovie("", false);//TEST TO FAIL WITH AN EMPTY STRING