function toggleMenu(x) {
    x.classList.toggle("change");
    
    document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
  }

  


function toggleAudioPlayer(){
    document.getElementById("audioPlayer").style.autoplay = document.getElementById("audioPlayer").style.autoplay =='true' ?   'false' : 'true';
}
function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
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
function contentDropWHL(n,w,h,l){
  
    
    let arrow = document.getElementsByClassName("arrow");
    let imageContainer = document.getElementsByClassName("imageContainerL");
    let expanded = document.getElementsByClassName("expanded-content");

    arrow[n].style.display="none";

    let image = document.getElementById("image"+n);
    if(n%2==0){
        image.style.width=""+w+"px";
        image.style.height=""+h+"px";
    }
    else{
        var i = Math.floor(n/2);
        imageContainer[i].style.left=""+l+"%";
        image.style.width=""+w+"px";
        image.style.height=""+h+"px";

    }
    setTimeout(1000);
    expanded[n].style.display="block";
    expanded[n].style.visibility="visible";


        
      
}

