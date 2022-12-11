$(document).ready(function () {

    $(".hide").hide();
  
})

function showParagraph(idName, color){

    var id = "#" + idName;

    $("#show").hide();
    $(".hide").hide();
    
    $(id).show();

    document.body.style.backgroundColor = color;

}

function getRandomImage() {  

    var randomImage = new Array();  
      
    randomImage[0] = "griffcrest.png";  
    randomImage[1] = "slythcrest.png";
    randomImage[2] = "hufflecrest.png";
    randomImage[3] = "ravencrest.png";

    
    var number = Math.floor(Math.random()*randomImage.length);  
      
    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'"/>'; 

}  