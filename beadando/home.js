let slideIndex=1;
let pic1 = document.getElementsByClassName("gallery_img--1");
let pic2 = document.getElementsByClassName("gallery_img--2");
let pic3 = document.getElementsByClassName("gallery_img--3");
let pic4 = document.getElementsByClassName("gallery_img--4");

function nextTick(){
    setTimeout(()=>{

        slideNext();
        nextTick();

    }, 6000)
}

function slideNext(){

    slideIndex+=1;
    showSlide(slideIndex);

}

function showSlide(n){

    if(slideIndex>pic1.length){
        slideIndex = 1;
    }
    for(let i=0; i<pic1.length; i++){

        pic1[i].style.display = "none";
        pic2[i].style.display = "none";
        pic3[i].style.display = "none";
        pic4[i].style.display = "none";

    }

    pic1[slideIndex-1].style.display = "block";
    pic2[slideIndex-1].style.display = "block";
    pic3[slideIndex-1].style.display = "block";
    pic4[slideIndex-1].style.display = "block";

}

nextTick();