document.addEventListener('DOMContentLoaded', function() {
let circularProgress = document.getElementsByClassName("circular-progress")[0];
let progressValue = document.getElementsByClassName("progress-value")[0];
const title = document.getElementById('title')

const updiv = document.getElementById('updiv')
const svgdollar = document.getElementById('svgdollar')
const  content =document.getElementById('content')
const  firsth2 =document.getElementById('firsth2')

const secondsvg = document.getElementById('secondsvg')
secondsvg.style.display ='none'


const dollarimg  = document.getElementById('dollarimg')
dollarimg.style.display ='none'

const seccondh  = document.getElementById('seccondh')
seccondh.style.display ='none'

const secondp  = document.getElementById('secondp')
secondp.style.display ='none'

const thirdp  = document.getElementById('thirdp')
thirdp.style.display ='none'



let progressStartValue = 0;
let progressEndValue = 100;
let speed = 30;

function startProgress() {
  let progress = setInterval(() => {
      progressStartValue++;
      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#0276B1 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
      if (progressStartValue == progressEndValue) {
          clearInterval(progress);
          progressStartValue = 0; // Reset the progress start value to restart from the beginning
      }
  }, speed);
}
startProgress()

  
  window.onload = function() {
    content.style.width = '370px';
    content.style.height = '350px';
    firsth2.style.display='flex'
  }

  
///////////second
function secondpart(){
  title.style.display ='none'
  updiv.style.display ='none'
  circularProgress.style.display ='none'
  progressValue.style.display ='none'
  svgdollar.style.display ='none'
}
setTimeout(secondpart, 4000);

setTimeout(() => {
secondsvg.style.display ='flex'
secondp.style.display ='flex'
}, 4500);

setTimeout(() => {
seccondh.style.display ='flex'
  
},4700);


//display none second part
setTimeout(() => {
  secondsvg.style.transform = 'translateY(55px)';
    secondsvg.style.transition = 'transform 1s ease-in-out';
  },6600);
 
  setTimeout(() => {
    secondp.style.transform = 'translateY(-55px)';
    secondp.style.transition = 'transform 1s ease-in-out'; 
    seccondh.style.transform = 'translateY(-45px)';
    seccondh.style.transition = 'transform 1s ease-in-out'; 
  },6500);
 
  
  setTimeout(() => {
    secondp.style.display ='none'
    secondsvg.style.display ='none'
    seccondh.style.display ='none' 
  },6870);


 
  function thirdpart(){
    title.style.display ='none'
    updiv.style.display ='none'
    svgdollar.style.display ='none'
    secondsvg.style.display ='none'
    seccondh.style.display ='none'
    secondp.style.display ='none'
    thirdp.style.display ='flex'
    dollarimg.style.display='flex'
    content.style.display ='flex'
    circularProgress.style.display ='flex'
    startProgress()
    circularProgress.style.top ='120px'
}
setTimeout(thirdpart, 7500);
});



setTimeout(() => {
  content.style.transition = 'transform 1s ease-in-out'; 
  content.style.transform = 'translateY(-700px)';
  dollarimg.style.transition = 'transform 11s ease-in-out'; 
  dollarimg.style.transform = 'translateY(-700px)'; 
  seconddiv.style.transform = 'translateY(-500px)';
  seconddiv.style.transition = 'transform 1s ease-in-out'; 
  thirdp.style.transform = 'translateY(-700px)';
  thirdp.style.transition = 'transform 1s ease-in-out'; 
}, 10730);


setTimeout(() => {
  content.style.display = 'none'; 
  thirdp.style.display = 'none';
  dollarimg.style.display = 'none';
  seconddiv.style.display = 'none';
}, 12000);


