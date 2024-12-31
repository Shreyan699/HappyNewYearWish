year = document.getElementsByClassName('year')

let index = 0;
setInterval(() => {
if(index<4){
    year[index].style.backgroundColor = "#F9E6CF"
    year[index].style.color = "#69247C"
    year[index].style.borderRadius = "40px"
    index++
    console.log("hi")
}
   
  
    else if (index >= 3) {
        year[3].innerHTML = "5"
    }



}, 500);

function ShowOtherBox(){
    box=document.querySelector('.box').style.display="None";
    box2= document.querySelector('.box-2').style.display = "flex"
    
}

function ShowOriginalBox(){
    box=document.querySelector('.box').style.display="flex";
    box2= document.querySelector('.box-2').style.display = "None"
}

var i = 0;
var txt = 'Naye saal ka har pal aapke jeevan me khushiyon ka saugat bharde. '; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    console.log("TypeWritted")
  if (i < txt.length) {
    document.getElementById("paragraph").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
}
