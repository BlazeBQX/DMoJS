function toggleMenu(x) {
    x.classList.toggle("change");
    
    document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
  }

  
function contentDrop(n){
  
    
    let arrow = document.getElementsByClassName("arrow");
    let imageContainer = document.getElementsByClassName("imageContainerL");
    let expanded = document.getElementsByClassName("expanded-content");


    arrow[n].style.display="none";

    let image = document.getElementById("image"+n);
    if(n%2==0){
        image.style.width="300px";
        image.style.height="400px";
    }
    else{
        var i = Math.floor(n/2);
        imageContainer[i].style.left="25%";
        image.style.width="300px";
        image.style.height="400px";

        
    }
    setTimeout(1000);
    expanded[n].style.display="block";
    expanded[n].style.visibility="visible";


        
      
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
function stuntHeight()
{
    let tl = document.getElementsByClassName("mid");
    let x = 0;
    let containers = document.getElementsByClassName("container");
    for(let i = 0;i<containers.length;i++)
    {
        x+= containers[i].getAttribute("height")+30;
    }
    tl[0].style.height=""+i+"px";
}
