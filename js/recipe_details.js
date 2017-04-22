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
  var r = getParameterByName("r");
  var reg = new RegExp("#");
  var uri = r.replace("#","%23");

  $.ajax({
    url: "https://api.edamam.com/search?r="+ uri + "&app_key="+"45910d91fb3a6fc848e8f55ee98d632c" + "&app_id="+"750cd2e7",
  method: "GET",
  headers: { "Accept": "application/json; odata=verbose" },
  success: function (data) {
      var imgNode = document.getElementById("recipe-image");
      imgNode.src = data[0].image
      console.log(data[0].ingredientLines)
      data[0].ingredients.forEach (function(ingredients){
         var ingNode = document.getElementById("ingredients-list");
          var newIngredient = document.createElement("li");
          newIngredient.innerHTML = ingredients.text
          ingNode.appendChild(newIngredient)
      });
      var directions = document.getElementById("site-display");
      directions.src = data[0].url

  },
  error: function (data) {
  console.log(JSON.stringify(data));
  }
  });
});
