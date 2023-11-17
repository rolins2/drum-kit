var tb = document.querySelectorAll(".drum");

for (var i = 0; i < tb.length; i++) {
  tb[i].addEventListener("click", function () {
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();

    //this.style.color = "white";
    var buttonInnerHtml = this.innerHTML;

    makeSomeNoise(buttonInnerHtml);
    btn_active(buttonInnerHtml);
    document.addEventListener("keydown", (event) => {
      makeSomeNoise(event.key);
      btn_active(event.key);
    });
  });
}

function makeSomeNoise(event) {
  switch (event) {
    case "w":
      var tum1 = new Audio("./sounds/tom-1.mp3");
      tum1.play();
      break;
    case "a":
      var tum2 = new Audio("./sounds/tom-2.mp3");
      tum2.play();
      break;
    case "s":
      var tum3 = new Audio("./sounds/tom-3.mp3");
      tum3.play();
      break;

    case "d":
      var tum4 = new Audio("./sounds/tom-4.mp3");
      tum4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

function btn_active(ckey) {
  var vals = document.querySelector("." + ckey);
  vals.classList.add("pressed");

  setTimeout(function () {
    vals.classList.remove("pressed");
  }, 100);
}
