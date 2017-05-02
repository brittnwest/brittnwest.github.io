$(document).ready(function(){
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var searchterms = getParameterByName('searchterms');

$.ajax({
  url: "https://api.edamam.com/search?q="+ searchterms + "&app_key="+"45910d91fb3a6fc848e8f55ee98d632c" + "&app_id="+"750cd2e7",
method: "GET",
headers: { "Accept": "application/json; odata=verbose" },
success: function (data) {

  data.hits.forEach (function(result) {
    var node = document.getElementById("results-content");
    var newLink = document.createElement("a");
    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    var newContainer = document.createElement("div");
    var newHeading = document.createElement("h3");
    var newDesc = document.createElement("p");
    var newLevel = document.createElement("h4");
    var uri = encodeURIComponent(result.recipe.uri)
    newLink.href = "../html/recipe_details.html?r=" + uri
    newDiv.className = 'card'
    newImg.src = result.recipe.image
    newContainer.className = 'container'
    newHeading.innerText = result.recipe.label
    newDesc.innerHTML = result.recipe.healthLabels
    newLevel.innerHTML = result.recipe.dietLabels
    node.appendChild(newLink)
    newLink.appendChild(newDiv)
    newDiv.appendChild(newImg)
    newDiv.appendChild(newContainer)
    newContainer.appendChild(newHeading)
    newContainer.appendChild(newLevel)
    newContainer.appendChild(newDesc)

  });
},
error: function (data) {
  console.log(JSON.stringify(data));
}
});
});
