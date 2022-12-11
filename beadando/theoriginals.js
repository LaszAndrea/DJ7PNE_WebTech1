$("#showk").hide();
$("#showe").hide();

var flag = true;

$(document).ready(function(){
    $("#klaus").click(function(){
      if(flag){
        $("#klaus").animate({
          marginLeft : "-=20%"
        });
        $("#elijah").animate({
          opacity: "0"
        });
        $("#elijah").fadeOut()
        $("#showk").fadeIn()
        flag = false;
      }
      else{
        $("#klaus").animate({
          marginLeft : "+=20%"
        });
        $("#elijah").animate({
          opacity: "1"
        });
        $("#elijah").fadeIn()
        $("#showk").fadeOut()
        flag = true;
      }
    });
});

var flag = true;

$(document).ready(function(){
  $("#elijah").click(function(){
    if(flag){
      $("#elijah").animate({
        marginLeft : "+=20%"
      });
      $("#klaus").animate({
        opacity: "0"
      });
      $("#showe").fadeIn()
      flag = false;
    }
    else{
      $("#elijah").animate({
        marginLeft : "-=20%"
      });
      $("#klaus").animate({
        opacity: "1"
      });
      $("#klaus").fadeIn()
      $("#showe").fadeOut()
      flag = true;
    }
  });
});