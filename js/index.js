window.onload = function (){
    var data = ['The Shawshank Redemption','The Godfather','Star Wars: Episode V - The Empire Strikes Back'];

    // Add videos
    var videoInput = document.getElementById("videoInput");
    var addVideo = document.getElementById("addVideo");
    var alertMsg = document.getElementById("alertMsg");
 
    // Search videos
    var autocomplete = document.getElementById("autocomplete");
    var resultsHTML = document.getElementById("results");

    // Event handlers

    addVideo.onclick = addMovies;

    function addMovies(){
        var title = videoInput.value;
        if(title == ""){
          alertMsg.innerText = 'Please add a video title';
          alertMsg.classList.remove("success");
          alertMsg.classList.add("fail");
        } else {
          data.push(title);
          videoInput.value = "";
          alertMsg.innerText = 'Title has been successfully added';
          alertMsg.classList.remove("fail");
          alertMsg.classList.add("success");
        }
    }

    autocomplete.onkeyup = function () {
      var results = [];
      var userInput = this.value;
      resultsHTML.innerHTML = "";

      if (userInput != "") {
        results = getResults(userInput);
        resultsHTML.style.display = "block";
      
        if (results.length == 0) {
          resultsHTML.innerHTML += "<li>Not found</li>";
          resultsHTML.style.color = "red";
        } else {
          resultsHTML.style.color = "black";
          for (i = 0; i < results.length; i++) {
            resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
          }
        }

      }
    };

    function getResults(input) {
      var results = [];
      
      if (input.length == 0) return results;

      for (i = 0; i < data.length; i++) {
        if (input.toLowerCase() === data[i].slice(0, input.length).toLowerCase()) {
          results.push(data[i]);
        }
      }

      return results;
    }

}