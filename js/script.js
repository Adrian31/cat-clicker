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
   }
};

$.each( initialCats, function( key, value){
  if(key != "currentCat"){
    $catSelect.append('<li class=' + key + '>' + key + '</li>');
  }
});

$("li").click(function(){
   var myClass = $(this).attr("class");
   alert(myClass);
   //initialCats.currentCat = second
   initialCats.currentCat = "";
   initialCats.currentCat = initialCats.initialCats + myClass;
   console.log(initialCats.currentCat);
});

var catSelector = function(){
  initialCats.currentCat = initialCats.Sammy;
  console.log(initialCats.currentCat);

}
catSelector();

var catCreator = function(){
  $cats.append('<hX class="cat-names">' + initialCats.currentCat.name + '</hX>');
  $cats.append('<ul id="cats"><li class="cat-list-style"><img src="' + initialCats.currentCat.imgSrc + '"></li></ul>');
}

//Clicker counter
$cats.click(function(){
  $counter.html(" ");
  initialCats.currentCat.clickCount++;
  console.log(initialCats.Sammy.clickCount);
  $counter.append(initialCats.currentCat.clickCount);
});

catCreator();
//Known Bugs
