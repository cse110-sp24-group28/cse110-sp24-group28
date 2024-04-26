const gifs = [
  "https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif",
  "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
];

const audios = ["./assets/sample-3s.mp3", "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3"];
let audio;
function setGif(num) {
  const element = document.getElementById("gif");
  element.setAttribute("src", gifs[num]);
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio = new Audio();
  audio.src = audios[num];
  audio.play().catch((e) => console.log(e));
}
