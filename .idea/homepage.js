let slideIndex = 1;
carousel(slideIndex);

function plusSlides() {
    clearTimeout();
    carousel(slideIndex += 1);
  }
function minusSlides(){
    clearTimeout();
    carousel(slideIndex -=1);
    
}
  function currentSlide(n) {
    clearTimeout();
    carousel(slideIndex = n);
  }
function carousel(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
    
 }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(plusSlides,8000);
  
}

function toggleMenu(x) {
  x.classList.toggle("change");
  
  document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
}