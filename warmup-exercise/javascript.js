const gifs = [
  "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
  "https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExem93OWEwNXVycjJqOWh3OXNiejVsbTl2OTQ0eTY5MXRxaXJxM2ljaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LMJavgUFMwM6CICHrt/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZxeXBjYXY3NnIwMWwydTlvcnM5eHZlMmlzcjV1bDVvZ3lrNmFmOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T87BZ7cyOH7TwDBgwy/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2x3cDJvY2UzcDJ5NnMzdXlzMnppeHBqMXM1Y2dua2Y4bXlveHM3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TdfyKrN7HGTIY/giphy.gif",
];

const audios = ["https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3", "./assets/sample-3s.mp3"];
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
