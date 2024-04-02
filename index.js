//onOff toggle
let power = false;
let volumeValue = 1.0;

const onOff = document.querySelector(".toggle");
onOff.addEventListener("click", toggle);

function toggle() {
  power = !power;
  if (power) {
    onOff.classList.add("powerOn");
    enableSynth();
  } else {
    onOff.classList.remove("powerOn");
    disableSynth();
  }
  console.log(power);
}

const volumeSlider = document.getElementById("volume-control");
volumeSlider.addEventListener("input", function () {
  volumeValue = parseInt(volumeSlider.value) / 100;
});

//Control by click

const keys = document.querySelectorAll(".key");

function enableSynth() {
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      if (power) {
        playKeySound(key);
      }
    });
  });

  function playKeySound(key) {
    if (power) {
      const sound = new Audio("MP3-synth/" + key.id + ".mp3");
      sound.volume = volumeValue;
      sound.play();
    }
  }
  document.addEventListener("keydown", function (event) {
    if (!event.repeat && power) {
      playSound(event.key);
    }
  });

  //Control by keys

  function playSound(key) {
    switch (key) {
      case "1":
        let c3 = new Audio("MP3-synth/c3.mp3");
        c3.play();
        c3.volume = volumeValue;
        break;
      case "2":
        let cSharp3 = new Audio("MP3-synth/cSharp3.mp3");
        cSharp3.play();
        cSharp3.volume = volumeValue;
        break;
      case "3":
        let d3 = new Audio("MP3-synth/d3.mp3");
        d3.play();
        d3.volume = volumeValue;
        break;
      case "4":
        let dSharp3 = new Audio("MP3-synth/dSharp3.mp3");
        dSharp3.play();
        dSharp3.volume = volumeValue;
        break;
      case "5":
        let e3 = new Audio("MP3-synth/e3.mp3");
        e3.play();
        e3.volume = volumeValue;
        break;
      case "6":
        let f3 = new Audio("MP3-synth/f3.mp3");
        f3.play();
        f3.volume = volumeValue;
        break;
      case "7":
        let fSharp3 = new Audio("MP3-synth/fSharp3.mp3");
        fSharp3.play();
        fSharp3.volume = volumeValue;
        break;
      case "8":
        let g3 = new Audio("MP3-synth/g3.mp3");
        g3.play();
        g3.volume = volumeValue;
        break;
      case "9":
        let gSharp3 = new Audio("MP3-synth/gSharp3.mp3");
        gSharp3.play();
        gSharp3.volume = volumeValue;
        break;
      case "0":
        let a3 = new Audio("MP3-synth/a3.mp3");
        a3.play();
        a3.volume = volumeValue;
        break;
      case "-":
        let aSharp3 = new Audio("MP3-synth/aSharp3.mp3");
        aSharp3.play();
        aSharp3.volume = volumeValue;
        break;
      case "=":
        let b3 = new Audio("MP3-synth/b3.mp3");
        b3.play();
        b3.volume = volumeValue;
        break;
      case "a":
        let c4 = new Audio("MP3-synth/c4.mp3");
        c4.play();
        c4.volume = volumeValue;
        break;
      case "w":
        let cSharp4 = new Audio("MP3-synth/cSharp4.mp3");
        cSharp4.play();
        cSharp4.volume = volumeValue;
        break;
      case "s":
        let d4 = new Audio("MP3-synth/d4.mp3");
        d4.play();
        d4.volume = volumeValue;
        break;
      case "e":
        let dSharp4 = new Audio("MP3-synth/dSharp4.mp3");
        dSharp4.play();
        dSharp4.volume = volumeValue;
        break;
      case "d":
        let e4 = new Audio("MP3-synth/e4.mp3");
        e4.play();
        e4.volume = volumeValue;
        break;
      case "f":
        let f4 = new Audio("MP3-synth/f4.mp3");
        f4.play();
        f4.volume = volumeValue;
        break;
      case "t":
        let fSharp4 = new Audio("MP3-synth/fSharp4.mp3");
        fSharp4.play();
        fSharp4.volume = volumeValue;
        break;
      case "g":
        let g4 = new Audio("MP3-synth/g4.mp3");
        g4.play();
        g4.volume = volumeValue;
        break;
      case "y":
        let gSharp4 = new Audio("MP3-synth/gSharp4.mp3");
        gSharp4.play();
        gSharp4.volume = volumeValue;
        break;
      case "h":
        let a4 = new Audio("MP3-synth/a4.mp3");
        a4.play();
        a4.volume = volumeValue;
        break;
      case "u":
        let aSharp4 = new Audio("MP3-synth/aSharp4.mp3");
        aSharp4.play();
        aSharp4.volume = volumeValue;
        break;
      case "j":
        let b4 = new Audio("MP3-synth/b4.mp3");
        b4.play();
        b4.volume = volumeValue;
        break;
      default:
    }
  }
}

function disableSynth() {
  keys.forEach((key) => {
    key.removeEventListener("click", () => {
      if (power) {
        playKeySound(key);
      }
    });
  });

  document.removeEventListener("keydown", function (event) {
    if (!event.repeat && power) {
      playSound(event.key);
    }
  });
}

// Show keys:

let toggleSwitcher = document.getElementById("showKeys");
let notes = document.querySelectorAll(".white, .black");

let abc = toggleSwitcher.addEventListener("click", toggleThis);
let shown = false;

function toggleThis() {
  shown = !shown;

  notes.forEach(note => {note.innerHTML = shown ? note.dataset.label : ""})
  return;
}

