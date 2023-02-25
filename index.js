// Time Clock
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

// Background Random

// const body = document.body;
// setInterval(() => {
//   const red = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const rgb = `rgb(${red},${green},${blue})`;
//   body.style.backgroundColor = rgb;
// }, 1000);

 // Stop Watch

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


//  Timmer Watch

const playButton = document.querySelector(".fa-play-circle")
const pauseButton = document.querySelector(".fa-pause-circle-o")
const input = document.querySelectorAll(".input")
const label = document.querySelectorAll("label")
const timer = document.querySelector(".timer")
const hour = document.querySelector('.hour')
const mintus = document.querySelector('.mintus')
const second = document.querySelector('.second')
const timerNumber = document.querySelector('.timer-number');

var timerHour;
var timerMintus; 
var timerSeconds;
var timerID;

hour.addEventListener('change',(e)=>{
  hour.value = e.target.value;
  timerHour = e.target.value;
  timerMintus = 59;
  timerSeconds = 59;
})
mintus.addEventListener('change',(e)=>{
  if(hour.value == ''){
    hour.value = 0;
    timerHour = 0;
  }
  mintus.value = e.target.value;
  timerMintus = e.target.value;
  timerSeconds = 59;
})
second.addEventListener('change',(e)=>{
  if(hour.value == '' && mintus.value == ''){
    hour.value = 0;
    timerHour = 0;
    mintus.value = 0;
    timerMintus = 0;
  }
  second.value = e.target.value;
  timerSeconds = e.target.value;
})
playButton.addEventListener('click',function(){
  if(input[0].value === '' && input[1].value === '' && input[2].value === ''){
    alert("Please Enter Time")
  }else{
    hour.value = ""
    mintus.value = ""
    second.value = ""
    Array.from(input).map((item,index)=>{
      input[index].style.display = "none";
      input[index].style.display = "none";
      input[index].style.display = "none";
      label[index].style.display = "none";
      label[index].style.display = "none";
      label[index].style.display = "none";
    })
    pauseButton.style.display = "unset"
    playButton.style.display = "none"
    timer.style.display = "unset"
    timerNumber.textContent = `${timerHour}h:${timerMintus}m:${timerSeconds}s`
    timerID = setInterval(()=>{
      if(timerHour == 0 && timerMintus == 0 && timerSeconds == 0){
        pauseButton.click();
      }else{
        if(timerSeconds !== 0){
          timerSeconds--;
      }else{
        timerSeconds = 59;
        if(timerMintus != 0){
          timerMintus--;
        }else{
          timerMintus = 59;
          timerHour--;
        }
      }
      }
      audio.play();
      timerNumber.textContent = `${timerHour}h:${timerMintus}m:${timerSeconds}s`
    },1000)
  }
})

pauseButton.addEventListener('click',function(){
  clearInterval(timerID);
  Array.from(input).map((item,index)=>{
    input[index].style.display = "unset";
    input[index].style.display = "unset";
    input[index].style.display = "unset";
    label[index].style.display = "unset";
    label[index].style.display = "unset";
    label[index].style.display = "unset";
  })
  pauseButton.style.display = "none"
  playButton.style.display = "unset"
  timer.style.display = "none"
})