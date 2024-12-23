var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}






var btn2 = document.getElementById("myBtn2");
var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}











var btn3 = document.getElementById("myBtn3");
var modal3 = document.getElementById("myModal3");
var span3 = document.getElementsByClassName("close")[2];
// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}


// Slideshow handling
var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
}




var btn4 = document.getElementById("myBtn4");
var modal4 = document.getElementById("myModal4");
var span4 = document.getElementsByClassName("close")[3];
// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}






var btn5 = document.getElementById("myBtn5");
var modal5 = document.getElementById("myModal5");
var span5 = document.getElementsByClassName("close")[4];
// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}





var btn6 = document.getElementById("myBtn6");
var modal6 = document.getElementById("myModal6");
var span6 = document.getElementsByClassName("close")[5];
// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}





var btn7 = document.getElementById("myBtn7");
var modal7 = document.getElementById("myModal7");
var span7 = document.getElementsByClassName("close")[6]; // Changed index from 1 to 6
// When the user clicks on the button, open the modal
btn7.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}




var btn8 = document.getElementById("myBtn8");
var modal8 = document.getElementById("myModal8");
var span8 = document.getElementsByClassName("close")[7]; // Changed index from 1 to 7
// When the user clicks on the button, open the modal
btn8.onclick = function() {
  modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span8.onclick = function() {
  modal8.style.display = "none";
}




var btn9 = document.getElementById("myBtn9");
var modal9 = document.getElementById("myModal9");
var span9 = document.getElementsByClassName("close")[8]; // Changed index from 1 to 8
// When the user clicks on the button, open the modal
btn9.onclick = function() {
  modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span9.onclick = function() {
  modal9.style.display = "none";
}


var btn10 = document.getElementById("myBtn10");
var modal10 = document.getElementById("myModal10");
var span10 = document.getElementsByClassName("close")[9]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn10.onclick = function() {
  modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span10.onclick = function() {
  modal10.style.display = "none";
}

var btn11 = document.getElementById("myBtn11");
var modal11 = document.getElementById("myModal11");
var span11 = document.getElementsByClassName("close")[10]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn11.onclick = function() {
  modal11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span11.onclick = function() {
  modal11.style.display = "none";
}

var btn12 = document.getElementById("myBtn12");
var modal12 = document.getElementById("myModal12");
var span12 = document.getElementsByClassName("close")[11]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn12.onclick = function() {
  modal12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span12.onclick = function() {
  modal12.style.display = "none";
}

// Listen for outside click to close modal



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal4) {
    modal4.style.display = "none";
  }
  else if (event.target == modal5) {
    modal5.style.display = "none";
  }
  else if (event.target == modal6) {
    modal6.style.display = "none";
  }
  else if (event.target == modal7) {
    modal7.style.display = "none";
  }
  else if (event.target == modal8) {
    modal8.style.display = "none";
  }
  else if (event.target == modal9) {
    modal9.style.display = "none";
  }
  else if (event.target == modal10) {
    modal10.style.display = "none";
  }
  else if (event.target == modal11) {
    modal11.style.display = "none";
  }
  else if (event.target == modal12) {
    modal12.style.display = "none";
  }

}






