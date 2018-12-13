var width;
var height;

$(document).ready(function() {

    width = (document.getElementById('imageGal').width + window.screen.availWidth) /3.88;
    height = (document.getElementById('imageGal').width + window.screen.availHeight) /3.88;


    document.getElementById("about").style.margin = "10px 10px 10px " + (width/1/20)+"px";

    //document.getElementById("imageGal").style.width = width+"px";
    //document.getElementById("imageGal").style.height = height+"px";
    startSlideShow();
});


// IMPORTANT!!! MAKE SURE THE IMAGES ARE 1200x800 !!!!
//To add images to the slideshow add put the image in the images folder and put the filename here
var imageSources = ["IMG_0033.JPG", "IMG_0074.JPG", "IMG_0533.PNG", "IMG_0532.PNG", "IMG_0535.JPG", "IMG_0525.PNG", "IMG_0531.PNG"]
// IMPORTANT!!! MAKE SURE THE IMAGES ARE 1200x800 !!!!

function startSlideShow(){
  var index = 0;
  setInterval (function(){
    if (index === imageSources.length) {
      index = 0;
    }
    document.getElementById("imageGal").src = "images/"+imageSources[index];
    //document.getElementById("imageGal").style.width = width+"px";
    //document.getElementById("imageGal").style.height = height+"px";
    index++;
  }, 10000); // 10,000 is 10 sec be for changing pics
}
