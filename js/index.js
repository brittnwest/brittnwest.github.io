//***Home**//

  //trigger when ready
  $(document).ready(function(){
  });
  //**Search section**
  //get search criteria on search click
  //set options

// var ingredients  = ['Select a main ingredient...','Avocado','Broccoli','Carrots','Spinach','Salmon']
// for(index=0; index < ingredients.length; ++index){
//   var option = new Option(ingredients[index], index)
//   $('select').append($(option));
//   }
// });



//get ingredients selected

    function inputKeyUp(event) {
        event.preventDefault();
        event.which = event.which || event.keyCode;
    if(event.which == 13) {
           console.log("good start")
            var searchterms = document.getElementById("search").value
            // call our search function
            getResultsFromAPI(searchterms);
            return false;
        }
    }

    function getResultsFromAPI (searchterms) {
        window.location.replace("../html/search_results.html?searchterms="+searchterms)

};

                 // Parse the  data:
                 //var resultsString = "";

                 //$("#results").html(resultsString);



//get recipe based on ingredients

//redirect to results page


  //**Featured recipe section**

  //Set current carousel position to start
  //On right click,
    //if at the end, do nothing.
    //else scroll over 4 recipes
  //On left click,
      //if at the start, do nothing.
      //else, scroll left 4 recipes
  //on recipe image click, redirect to recipe details

//**search **//

  //**Search section**
  //get search criteria on search click
  //check related
  //redirect to search results

//**Search results **//

  //**Filters**

  //On Cooking Experience toggle click, get toggle selection
  //Update search result list

  //**Display recipes**

  //load image at regular size
  //display title beneath, fixed width
  //repeat to the right
  //stack recipes

  //**Recipe drill down
  //on recipe image click, redirect to recipe details

//**Recipe details **//
  //Display recipe image - fixed width and height
  //Display recipe title underneath image
  //Display recipe description underneath title

//**Make It Yours Click**
  //Open side panel

  //**On Save it**
  //add ingredient subsitution notes inline
  //add directions sub notes inline

  //Print page
  //function printDiv(divName) {
      // var printContents = document.getElementById(divName).innerHTML;
      // var originalContents = document.body.innerHTML;

      // document.body.innerHTML = printContents;

      // window.print();

      // document.body.innerHTML = originalContents;
  //}
