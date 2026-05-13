let bgSong = new Audio("assets/sounds/the_point_end_ramin_djawadi.mp3");

const switchBtn = document.querySelector("#sound-on-off");

switchBtn.addEventListener("change", function () {
  if (this.checked) {
    bgSong.play();
  } else {
    bgSong.pause();
  }
});
