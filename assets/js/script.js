/* ELEMENTOS */
const switchBtn = document.querySelector("#sound-on-off");
const linkQuiz = document.querySelectorAll(".link-house-quiz");

/* SONS */
const bgSong = new Audio("assets/sounds/the_point_end_ramin_djawadi.mp3");
const swordCutSong = new Audio("assets/sounds/sword_cut.mp3");

/* PLAY/PAUSE MÚSICA AMBIENTE */
switchBtn.addEventListener("change", function () {
  if (this.checked) {
    bgSong.loop = true;
    bgSong.play();
  } else {
    bgSong.pause();
  }
});

/* LINKS DE CADA CASA */
linkQuiz.forEach((link) => {
  link.addEventListener("click", () => {
    swordCutSong.currentTime = 0;
    swordCutSong.play();
  });
});
