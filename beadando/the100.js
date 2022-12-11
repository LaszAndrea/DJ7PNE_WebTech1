var slideIndex = 1;

function closeModal() {

  $("#bellamyModal").fadeOut();
  $("#clarkeModal").fadeOut();
  $("#murphyModal").fadeOut();

}


function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

function showSlides(n, className) {
  var i;
  var slides = document.getElementsByClassName(className);
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function validateForm(){

  let x = document.forms["myForm"]["lastname"].value;
  let y = document.forms["myForm"]["firstname"].value;
  let rate = document.forms["myForm"]["rate"].value;
  let email = document.forms["myForm"]["email"].value;
  let teloszam = document.forms["myForm"]["phone"].value;

  if (x == "" || y=="" || rate == "" || email == "") {
    alert("Figyelem! A form hibásan van kitöltve!");
    return false;
  }

  if(email.includes("@")){

    let kukac = email.split("@");

    if(kukac[1]!="gmail.com" && kukac[1]!="freemail.hu" && kukac[1] !="gmail.hu" && kukac[1]!="student.uni-miskolc.hu" && kukac[1]!="citromail.hu" && kukac[1]!="yahoo.com"){

      alert("Figyelem! Ilyen email-címet nem áll módunkban elfogadni!");
      document.forms["myForm"]["email"].classList.add("error");

      return false;

    }

  } else{
      return false;
  }

  let tel = teloszam.split("+");
  let long = tel[0].length;

  if(tel!=null){
  if(tel[0]==""){

    if(tel[1].includes("36")){
      let long = tel[1].length
      if(long != 11){
        document.forms["myForm"]["phone"].classList.add("error");
        alert("A telefonszám 11 számjegyes, kérem ellenőrizze!");
        return false;
      }
    } else{
        document.forms["myForm"]["phone"].classList.add("error");
        alert("Ha plusz előtaggal kezd, a telefonszámnak 36-al kell folytatódnia!")
        return false;
    }

  } else if(long != 11){
      document.forms["myForm"]["phone"].classList.add("error");
      alert("A telefonszám 11 számjegyes, kérem ellenőrizze!");
      return false;
  }}

}

$(document).on("keyup", "input.error", function(){

  $(this).removeClass("error");

})

function TodayDay(){

  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var year = today.getFullYear();

  return (year+"-"+mm+"-"+dd);

}

$(document).ready(function () {

  $("#hide").hide();
  $("#show").click(function () {

    $("#hide").show();

  })

})

$("#bellamyImg").click(function () {

  $("#bellamyModal").fadeIn();
  slideIndex = 1;
  showSlides(slideIndex, 'mySlides2');

})

$("#clarkeImg").click(function () {

  $("#clarkeModal").fadeIn();
  slideIndex = 1;
  showSlides(slideIndex, 'mySlides');

})

$("#murphyImg").click(function () {

  $("#murphyModal").fadeIn();
  slideIndex = 1;
  showSlides(slideIndex, 'mySlides3');

})

const inputTxt = document.querySelector('#txt');
const bttn = document.querySelector('.btn');
const list = document.querySelector('.list-container ul');

bttn.addEventListener('click', (e) => {

  let listS = document.getElementById("lc").getElementsByTagName("li");
  let inputT = inputTxt.value;

  if (listS.length > 0) {
    for (let i = 0; i < listS.length; i++) {

      console.log("i: " + i);

      let text = listS[i].innerHTML;
      let myArray = text.split("<");
      let word = myArray[0];

      console.log(word + "     " + inputT);

      if (word != inputT) {

        console.log("word != input");

        if (inputT != "") {

          console.log("word != ' ' ");

          e.preventDefault();

          const myList = document.createElement('li');
          myList.innerHTML = inputTxt.value;
          list.appendChild(myList);

          const x = document.createElement('span');
          x.innerHTML = 'x';
          myList.appendChild(x);

        }

        const cls = document.querySelectorAll('span');
        for (let i = 0; i < cls.length; i++) {
          cls[i].addEventListener('click', () => {

            cls[i].parentElement.style.display = "none";

          })
        }

        inputTxt.value = "";

      }
    }
  } else {

    if (inputTxt.value != "") {

      e.preventDefault();

      const myList = document.createElement('li');
      myList.innerHTML = inputTxt.value;
      list.appendChild(myList);

      const x = document.createElement('span');
      x.innerHTML = 'x';
      myList.appendChild(x);

    }

    const cls = document.querySelectorAll('span');
    for (let i = 0; i < cls.length; i++) {
      cls[i].addEventListener('click', () => {

        cls[i].parentElement.style.display = "none";

      })
    }

    inputTxt.value = "";

  }

})

