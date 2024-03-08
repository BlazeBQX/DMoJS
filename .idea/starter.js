function toggleMenu(x) {
    x.classList.toggle("change");
    
    document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
  }

  
function contentDrop(){
  
   
    let main = document.getElementsByClassName("content");
    let arrow = document.getElementsByClassName("arrow")
    arrow[0].style.display="none";
    let image = document.getElementById("image");
    image.style.width="325px";
    image.style.height="400px";
    setTimeout(1000);
    let expanded = document.getElementsByClassName("expanded-content");
    expanded[0].style.display="block";

        
      
}
