let slideIndex = 1;
let timeOut=8000;
carousel(slideIndex,0);

function plusSlides() {
  clearTimeout(timeOut);

    carousel(slideIndex += 1);
  }
function minusSlides(){
  clearTimeout(timeOut);

    carousel(slideIndex -=1);
    
}
  function currentSlide(n) {
    clearTimeout(timeOut);  
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
  timeOut=setTimeout(plusSlides,8000);

}
var playTime;
var pausedTime;
function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
function setPausedTime(exdays){
  pausedTime = new Date();
  pausedTime.setDate(pausedTime.getDate()+exdays);
  
}
function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
function update()
{
    if(!played){
        if(tillPlayed){
        song.currentTime = tillPlayed;
        song.play();
        played = true;
        }
        else {
                song.play();
                played = true;
        }
    }

    else {
    setCookie('timePlayed', song.currentTime);
    }
}

setInterval(update,1000);
function toggleMenu(x) {
  x.classList.toggle("change");
  
  document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
}