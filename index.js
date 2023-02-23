function timeInPakistan() {
  const date = new Date();
  var h = 0;
  var str = "AM";
  if (date.getHours() > 12) {
    h = date.getHours() - 12;
    str = "PM";
  } else {
    h = date.getHours();
  }
  if(h === 0){
    h = 12
  }
  var m = date.getMinutes();
  var s = date.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("PakClock").innerText =
    h + " : " + m + " : " + s + " " + str;
}
function InternationalTime() {
  const date = new Date();
  var h = 0;
  var str = "AM";
  h = date.getHours();
  if (h > 12) {
    str = "PM";
  }
  var m = date.getMinutes();
  var s = date.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("InterClock").innerText =
    h + " : " + m + " : " + s + " " + str;
}

setInterval(timeInPakistan, 1000);
setInterval(InternationalTime, 1000);

const body = document.body;
setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = rgb;
}, 1000);

const stopWatchDiv = document.querySelector(".stop-watch-div");
const buttons = document.querySelector(".buttons");

const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop = document.querySelector(".stop");
const stopWatchNumber = document.querySelector(".stop-watch-number");

let hcount = 0;
let mcount = 0;
let scount = 0;
let id = 0;

// add audio in project
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

start.addEventListener("click", function () {
    id = setInterval(() => {
      scount++;
      if (scount > 59) {
        scount = 0;
        mcount++;
        if (mcount > 59) {
          mcount = 0;
          hcount++;
        }
      }
      stopWatchNumber.textContent = `${hcount}:${mcount}:${scount}`;
      audio.play();
    }, 1000);
  stop.style.display = "unset";
  this.style.display = "none";
});

stop.addEventListener('click',function(){
    clearInterval(id)
    start.style.display = "unset";
    this.style.display = "none";
})

reset.addEventListener('click',function(){
    clearInterval(id)
    hcount = 0;
    mcount = 0;
    scount = 0;
    stopWatchNumber.textContent = `${hcount}:${mcount}:${scount}`;
    start.style.display = "unset";
    stop.style.display = "none";
})