var myAudio = document.getElementById("song");
var isPlaying = false;

const headphone = document.querySelector('#headphone-player');
const ipod = document.querySelector('#controls');


function togglePlay() {
  isPlaying ? song.pause() : song.play();
};

song.onplaying = function() {
  isPlaying = true;
  headphone.style.headphonePlayState = 'running';
  ipod.style.ipodPlayState = 'running';
};

song.onpause = function() {
  isPlaying = false;
  headphone.style.headphonePlayState = 'paused';
  ipod.style.ipodPlayState = 'paused';
};


