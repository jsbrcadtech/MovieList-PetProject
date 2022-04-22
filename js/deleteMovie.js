/**
 * deleteMovie function to delete a title from the data array(movies)
 * Returns the boolen true to delete a title if the fuction receives a title that exists in the data array(movies)
 * Otherwise, it returns false and doesn't continue with the deletion process for not finding a matching title.
 * @param {string[]} data
 * @param {string} title
 * @returns {boolean}
 */

function deleteMovie(data, title) {
  for (var i = 0; i < data.length; i++) {
    if (title.toLowerCase() === data[i].toLowerCase()) {
      data.splice(i, 1);
      return true;
    }
  } 
  return false;
}

