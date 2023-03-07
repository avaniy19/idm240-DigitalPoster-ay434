var myAudio = document.getElementById("song");
var isPlaying = false;

// const headphone = document.querySelector('#headphone-player');
// const ipod = document.querySelector('#controls');

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const line4 = document.querySelector(".line4");
const line5 = document.querySelector(".line5");
const line6 = document.querySelector(".line6");
const cdcontainer = document.querySelector(".cd-container");
const cd = document.querySelector(".cd");


function togglePlay() {
  isPlaying ? song.pause() : song.play();
};

song.onplaying = function() {
  isPlaying = true;
  line1.classList.add("line1--current");
  line2.classList.add("line2--current");
  line3.classList.add("line3--current");
  line4.classList.add("line4--current");
  line5.classList.add("line5--current");
  line6.classList.add("line6--current");
  cd.classList.add("cd-spin");
};

song.onpause = function() {
  isPlaying = false;
  cd.classList.remove("cd-spin");
};


