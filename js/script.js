var $body = $('body');
var clicks = 0;
//$body.append('<img class="bgimg" src="'cat.jpg'">');
$("#cat").prepend('<img id="cat" src="images/cat.jpg" />');

$( "#cat" ).click(function() {
  //alert( "Handler for .click() called." );
  if(clicks >= 20){
    clicks = clicks +2;
  }else{
    clicks++;
  }

  $('.counter').html(clicks);

});
//Known Bugs
//Clicking to the side of the cat also increments the counter.
