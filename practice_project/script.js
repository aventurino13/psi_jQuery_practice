/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;

$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare);

  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}

function highlightASquare(){
  //This variable stores an array of the elements with the 'square' class
  var arrayOfSquares = $('.square');

  if ($('.container').children().hasClass('highlight')){
    for (var i = 0; i < arrayOfSquares.length; i++) {
      if ($(arrayOfSquares[i]).hasClass('highlight')) {
        $(arrayOfSquares[i]).removeClass('highlight');
        if(i===arrayOfSquares.length-1){
          $(arrayOfSquares[0]).addClass('highlight');
        } else{$(arrayOfSquares[i += 1]).addClass('highlight');
        } return;
      }
    }
  } else {$(arrayOfSquares[0]).addClass('highlight');}
}


//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);
}
