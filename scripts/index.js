'use strict';

// Make the DIV element draggable:
dragElement(document.getElementById("clock"));
dragElement(document.getElementById("newsbox"));
dragElement(document.getElementById("youtube"));
dragElement(document.getElementById("quote"));


//SECTION to make  clock,news, youtube  apis move where disired by the user:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    //otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

function closeDragElement() {
// stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//// SETTINGS:
///
//

//Function to hide and show settings for page.
function myFunction() {
  let x = document.getElementById("myDIV");
  if (x.style.display === "block") {
   x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Function to enable dark mode
function changeback(){
    let col = document.body.style.backgroundColor = "black";
    if(col.value === "black"){
      col.body.style.backgroundColor = "White";
    }else{
      col.body.style.backgroundColor = "black";
    }
    localStorage.setItem('backroundcolor', 'col');
    console.log(localStorage.getItem('backroundcolor'));
  }

// Function to change backround image:
function changeimage(){
    let image = document.getElementById('img');
    if(image.src.match("/images/bann1.jpg")){
      image.src = "/images/bann2.jpg";
    }
    else{
      image.src = "/images/bann1.jpg";
    }
    localStorage.setItem('backroundimage', 'image');
    console.log(localStorage.getItem('backroundimage'));
	}
//function to enable/disable backround music
function aud_play_pause() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }

//function to uploadImage
function upimage() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "file");
  document.body.appendChild(x);
}
