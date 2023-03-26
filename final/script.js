const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play-pause-btn");
const spinner = document.querySelector(".spinner");
const progress = document.querySelector(".progress");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.querySelector("#pause").style.display = "block";
    playBtn.querySelector("#play").style.display = "none";
    spinner.style.display = "block";
  } else {
    audio.pause();
    playBtn.querySelector("#pause").style.display = "none";
    playBtn.querySelector("#play").style.display = "block";
    spinner.style.display = "none";
  }
});

audio.addEventListener("timeupdate", () => {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
});
