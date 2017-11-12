var a = document.querySelector("#lettera");
var s = document.querySelector("#s");
var d = document.querySelector("#d");
var f = document.querySelector("#f");
var g = document.querySelector("#g");
var h = document.querySelector("#h");
var j = document.querySelector("#j");
var k = document.querySelector("#k");
var l = document.querySelector("#l");

var key = true;

//letter "a"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "65"){
        a.classList.add("selected");
        var audio = new Audio("barking.mp3");
        audio.play();
      }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "65"){
      a.classList.remove("selected");
    }
  });

// letter "s"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "83"){
    s.classList.add("selected");
    var audio = new Audio("horn.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "83"){
      s.classList.remove("selected");
    }
  });

// letter "d"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "68"){
    d.classList.add("selected");
    var audio = new Audio("ghost.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "68"){
      d.classList.remove("selected");
    }
  });

// letter "f"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "70"){
    f.classList.add("selected");
    var audio = new Audio("rocket.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "70"){
      f.classList.remove("selected");
    }
  });

// letter "g"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "71"){
    g.classList.add("selected");
    var audio = new Audio("laugh.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "71"){
      g.classList.remove("selected");
    }
  });

// letter "h"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "72"){
    h.classList.add("selected");
    var audio = new Audio("elephant.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "72"){
      h.classList.remove("selected");
    }
  });

// letter "j"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "74"){
    j.classList.add("selected");
    var audio = new Audio("alert.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "74"){
      j.classList.remove("selected");
    }
  });

// letter "k"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "75"){
    k.classList.add("selected");
    var audio = new Audio("calculator.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "75"){
      k.classList.remove("selected");
    }
  });

// letter "l"
document.addEventListener("keydown", function (event){
  if(event.keyCode == "76"){
    l.classList.add("selected");
    var audio = new Audio("laser.mp3");
    audio.play();
  }
});

document.addEventListener("keyup", function(event){
    if(event.keyCode == "76"){
      l.classList.remove("selected");
    }
  });
