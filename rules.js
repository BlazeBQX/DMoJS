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




// Slideshow handling
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
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




// Slideshow handling
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
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

// Listen for outside click to close modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3){
    modal3.style.display = "none";
  }

}


