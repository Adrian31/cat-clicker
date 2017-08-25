var $body = $('body');
var $catSelect = $('#cat-select');
var img = document.createElement("img");
var $cats = $('#cats');
var $catList = $('.cat-list-style');
var $counter = $('.counter');
var initialCats = {
  currentCat: null,

  "Sammy":{
       "clickCount": 0,
       "name": "Sammy",
       "imgSrc": "images/cat1.jpg"
   },

   "Bruno":{
       "clickCount": 0,
       "name": "Bruno",
       "imgSrc": "images/cat2.jpg"
   },

   "Lilly":{
     "clickCount": 0,
     "name": "Lilly",
     "imgSrc": "images/cat3.jpg"
   }
};

initialCats.currentCat = initialCats.Sammy;

$.each( initialCats, function( key, value){
  if(key != "currentCat"){
    $catSelect.append('<li class=' + key + '>' + key + '</li>');
  }
});

var catCreator = function(){
     $cats.html(" ");
     $cats.append('<hX class="cat-names">' + initialCats.currentCat.name + '</hX>');
     $cats.append('<ul id="cats"><li class="cat-list-style"><img src="' + initialCats.currentCat.imgSrc + '"></li></ul>');
   }

$("li").click(function(){
   var myClass = $(this).attr("class");
   //initialCats.currentCat = second
   initialCats.currentCat = initialCats[myClass];
   console.log(initialCats.currentCat);

   $counter.html(" ");
   $counter.append(initialCats.currentCat.clickCount);
   catCreator();

});

catCreator();

//Clicker counter
$cats.click(function(){
  $counter.html(" ");
  initialCats.currentCat.clickCount++;
  $counter.append(initialCats.currentCat.clickCount);
});
