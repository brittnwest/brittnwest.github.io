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
      var title = document.getElementById("recipe-title");
      title.innerText = data[0].label
      imgNode.src = data[0].image
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

document.getElementById("miy").addEventListener("click",function(e){
  document.getElementById("make-it-yours").style.width = "300px";
      document.getElementById("main").style.marginRight = "300px";
  document.getElementById("miy").style.display= "none";
  document.getElementById("done").style.display = "block"
});

document.getElementById("done").addEventListener("click",function(e){
  document.getElementById("make-it-yours").style.width = "0px";
  document.getElementById("main").style.marginRight = "0px";
  document.getElementById("miy-button").style.display = "block"
  document.getElementById("miy").style.display = "block";
  document.getElementById("done").style.display = "none"
});

document.getElementById("print").addEventListener("click",function(e){
  e.preventDefault();
  window.print();
});


var addIngredient = document.getElementById("add-ingredient");
addIngredient.addEventListener("click",function(e){
  e.preventDefault();
  var subContainer = document.getElementById("sub-container");
  var newSubSet = document.createElement("div");
  //var newSubLabel = document.createElement("label");
  var newSubInput = document.createElement("input");
  var newForLabel = document.createElement("label");
  var newForInput = document.createElement("input");
  newSubInput.type = "text"
  //newSubLabel.innerHTML = "Sub:"
  newForInput.type = "text"
  newForLabel.innerHTML = "For "
  newSubSet.className = "subIngredient"
  subContainer.appendChild(newSubSet);
  newSubSet.appendChild(newSubInput);
  //newSubLabel.appendChild(newSubInput);
  newSubSet.appendChild(newForLabel);
  newForLabel.appendChild(newForInput);

})
