window.onload = function () {

  //Hard-coded  array of movies - data.
  // App is not connected to a database so everytime page is refreshed the array goes back to its original content. 
  var movies = [
    'The Shawshank Redemption', 'The Godfather', 'Star Wars: Episode V - The Empire Strikes Back',
    'Forrest Gump', 'The Perks of Being a Wallflower', 'The Dark Knight', 'Changeling', 'It\'s a Wonderful Life',
    'The Silence of the Lambs', '8 Mile'
  ];

  // Variables for DOM manipulation
  var videoInput = document.getElementById("videoInput");
  var addVideo = document.getElementById("addTitle");
  var removeVideo = document.getElementById("removeTitle");
  var alertMsg = document.getElementById("alertMsg");
  var autocomplete = document.getElementById("autocomplete");
  var searchResults = document.getElementById("search-results");
  var movieListResults = document.getElementById("movie-list-results");

// sorts the movies array 
  movies.sort();
  for (i = 0; i < movies.length; i++) {
    movieListResults.innerHTML += "<li>" + movies[i] + "</li>"
  };


  addVideo.onclick = addMovieValidator;


  function addMovieValidator() {
    var title = videoInput.value;
    if (addMovie(movies, title)) {
      videoInput.value = "";
      searchResults.innerHTML = '';
      movieListResults.innerHTML = '';
      for (i = 0; i < movies.length; i++) {
        movieListResults.innerHTML += "<li>" + movies[i] + "</li>"
      };
      alertMsg.classList.remove("fail");
      alertMsg.classList.add("success");
      searchResults.innerHTML = "";
      alertMsg.innerHTML = "Title was inserted successfully";
    } else {
      searchResults.innerHTML = "";
      alertMsg.innerText = 'Please add a video title';
      alertMsg.classList.remove("success");
      alertMsg.classList.add("fail");
    }
  }

  removeVideo.onclick = deleteMovieValidator;

  autocomplete.onkeyup = function () {
    var results = [];
    var userInput = this.value;
    searchResults.innerHTML = "";

    if (userInput != "") {
      results = searchMovie(movies, userInput);
      searchResults.style.display = "block";

      if (results.length == 0) {
        alertMsg.innerText = '';
        searchResults.innerHTML += "<li>Title not found</li>";
        searchResults.style.color = "#f30404db";

      } else {
        searchResults.style.color = "#35d04c";
        for (i = 0; i < results.length; i++) {
          alertMsg.innerText = '';
          searchResults.innerHTML += "<li>" + results[i] + "</li>";
        }
      }
    }
  };

  function deleteMovieValidator() {
    var title = videoInput.value;
    if (title === "") {
      searchResults.innerHTML = "";
      alertMsg.innerHTML = 'Please enter the title you want to remove';
      alertMsg.classList.remove("success");
      alertMsg.classList.add("fail");

    } else {
      if (deleteMovie(movies, title)) {
        movieListResults.innerHTML = '';
        for (i = 0; i < movies.length; i++) {
          movieListResults.innerHTML += "<li>" + movies[i] + "</li>"
        };
        videoInput.value = "";
        searchResults.innerHTML = "";
        alertMsg.innerHTML = "Title has been successfully removed";
        alertMsg.classList.add("success");

      } else {
        alertMsg.innerHTML = "Title not found";
        alertMsg.classList.remove("success");
        alertMsg.classList.add("fail");
        videoInput.value = "";
        searchResults.innerHTML = "";

      }
    }
  }

}; //End of window.onload

