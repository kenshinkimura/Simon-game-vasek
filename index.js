var retezec = []; //wariagle for memory sequence
var aktualniBarva;
var x = 0;
//function set on keydown start the game
function myFunction() {
  $("h1").text("Level 1");
  retezec.push(nahodnaBarva());
  aktualniBarva = retezec[0];
  //barvyHry.push(aktualniBarva);
  efektBarvy(aktualniBarva);
  $("body").removeAttr("onkeydown"); // remove attribute
  console.log(aktualniBarva);
}


//if click on button
$("div.btn").on("click", function(event) {
  var colorID = event.target.id;

  efektBarvy(event.target.id);


  console.log(colorID + " " + retezec[x]);
  if (colorID === retezec[x]) { // if clicked button was correct with retezec
    console.log(true);
    ++x
    if (x === retezec.length) {
      var z = nahodnaBarva();
      retezec.push(z);
      setTimeout(function() {
        efektBarvy(z);
        console.log(false);
        $("h1").text("Level " + retezec.length);
      }, 1000);

      x = 0;
    }
  } else {
//game over
    var audioWorning = new Audio("sounds/wrong.mp3");
    audioWorning.play();
    $("h1").text("Game over");
    $("body").addClass(" game-over")
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    setTimeout("location.reload(true);", 1000); //reset the game

  }
});

//buttonEffect and sound
function efektBarvy(vlozenaBarva) {
  $("div.btn#" + vlozenaBarva + " ").addClass("pressed");
  setTimeout(function() {
    $("div.btn#" + vlozenaBarva + " ").removeClass("pressed");
  }, 200);
  var audio = new Audio("sounds/" + vlozenaBarva + ".mp3");
  audio.play();
}

//return random color as a string
function nahodnaBarva() {
  var nahodneCislo = Math.floor(Math.random() * 4);
  var barvy = ["blue", "green", "red", "yellow"];
  return barvy[nahodneCislo];
}
