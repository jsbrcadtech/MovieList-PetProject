/**
 * addMovie function to add a title to the data array(movies).
 * Returns the boolen false if the fuction receives an empty title
 * Otherwise, it returns true and adds the entered title into the data array(movies).
 * @param {string[]} data
 * @param {string} title
 * @returns {boolean}
 */

function addMovie(data, title) {
  "use strict";
  
  if (typeof title != 'string' || title == "" || title == null || title == undefined) {
    return false;
  } else {
    data.push(title);
    return true;
  }
}
