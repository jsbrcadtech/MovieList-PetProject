/**
 * searchMovie function to search the user input inside of the data array(movies)
 * Returns an array of results if the data array(movies) contains the user input
 * Otherwise, it returns an empty array of results.
 * @param {string[]} data
 * @param {string} input
 * @returns {string[]}
 */

function searchMovie(data, input) {
  var results = [];
  for (i = 0; i < data.length; i++) {
    if (input.toLowerCase() === data[i].slice(0, input.length).toLowerCase()) {
      results.push(data[i]);
    }
  }
  return results;
}