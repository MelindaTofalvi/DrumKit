var keycodes = ["65", "83", "68", "70", "71", "72", "74", "75", "76"];
var sounds = ["barking.mp3", "horn.mp3", "ghost.mp3", "rocket.mp3", "laugh.mp3", "elephant.mp3", "alert.mp3", "calculator.mp3", "laser.mp3"];
var select;

$(document).on("keydown", function(e){
  var code = e.keyCode;
  for (var i = 0; i < keycodes.length; i++) {
    if(code == keycodes[i]){
      for (var j = 0; j < sounds.length; j++) {
        var audio = new Audio(sounds[i]);
        audio.play();
        select = $("p").parent()[i];
        $(select).addClass("selected");
      }
    }
 }
});

$(document).on("keyup", function(e){
  $(select).removeClass("selected");
});
