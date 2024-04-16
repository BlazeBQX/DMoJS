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

var btn13 = document.getElementById("myBtn13");
var modal13 = document.getElementById("myModal13");
var span13 = document.getElementsByClassName("close")[12]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn13.onclick = function() {
  modal13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span13.onclick = function() {
  modal13.style.display = "none";
}

var btn14 = document.getElementById("myBtn14");
var modal14 = document.getElementById("myModal14");
var span14 = document.getElementsByClassName("close")[13]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn14.onclick = function() {
  modal14.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span14.onclick = function() {
  modal14.style.display = "none";
}

var btn15 = document.getElementById("myBtn15");
var modal15 = document.getElementById("myModal15");
var span15 = document.getElementsByClassName("close")[14]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn15.onclick = function() {
  modal15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span15.onclick = function() {
  modal15.style.display = "none";
}

var btn16 = document.getElementById("myBtn16");
var modal16 = document.getElementById("myModal16");
var span16 = document.getElementsByClassName("close")[15]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn16.onclick = function() {
  modal16.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span16.onclick = function() {
  modal16.style.display = "none";
}


var btn17 = document.getElementById("myBtn17");
var modal17 = document.getElementById("myModal17");
var span17 = document.getElementsByClassName("close")[16]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn17.onclick = function() {
  modal17.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span17.onclick = function() {
  modal17.style.display = "none";
}


var btn18 = document.getElementById("myBtn18");
var modal18 = document.getElementById("myModal18");
var span18 = document.getElementsByClassName("close")[17]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn18.onclick = function() {
  modal18.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span18.onclick = function() {
  modal18.style.display = "none";
}


var btn19 = document.getElementById("myBtn19");
var modal19 = document.getElementById("myModal19");
var span19 = document.getElementsByClassName("close")[18]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn19.onclick = function() {
  modal19.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span19.onclick = function() {
  modal19.style.display = "none";
}


var btn20 = document.getElementById("myBtn20");
var modal20 = document.getElementById("myModal20");
var span20 = document.getElementsByClassName("close")[19]; // Changed index from 1 to 9
// When the user clicks on the button, open the modal
btn20.onclick = function() {
  modal20.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span20.onclick = function() {
  modal20.style.display = "none";
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

  else if (event.target == modal13) {
    modal13.style.display = "none";
  }

  else if (event.target == modal14) {
    modal14.style.display = "none";
  }

  else if (event.target == modal15) {
    modal15.style.display = "none";
  }

  else if (event.target == modal16) {
    modal16.style.display = "none";
  }

  else if (event.target == modal17) {
    modal17.style.display = "none";
  }

  else if (event.target == modal18) {
    modal18.style.display = "none";
  }

  else if (event.target == modal19) {
    modal19.style.display = "none";
  }

  else if (event.target == modal20) {
    modal20.style.display = "none";
  }

 
}






