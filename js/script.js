var $body = $('body');
var clicks = 0;
var img = document.createElement("img");

var catClick = function(){

  //#cat needs to become the image tag
  $( "#cat" ).click(function() {
    if(clicks >= 20){
      clicks = clicks +2;
    }else{
      clicks++;
    }
    //Displays the amount of times the cat was clicked.
    $('.counter').html(clicks);
  });
}

var catAdd = function(){

  for (var i = 1; i <= 2; i++) {
      var img = document.createElement("img");
      img.src = "images/cat" + i + ".jpg";

      $("#cat").prepend(img);
      $("#cat").prepend("<h1 class='header'>Cat</h1>");
  }
};

catAdd();
catClick();


//Known Bugs
//Clicking to the side of the cat also increments the counter.
//Cats names not being put above the images.
