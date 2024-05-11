document.addEventListener('DOMContentLoaded', function() {
let circularProgress = document.getElementsByClassName("circular-progress")[0];
let progressValue = document.getElementsByClassName("progress-value")[0];
const title = document.getElementById('title')
const updiv = document.getElementById('updiv')
const svgdollar = document.getElementById('svgdollar')
const  content =document.getElementById('content')
const  firsth2 =document.getElementById('firsth2')
const secondsvg = document.getElementById('secondsvg')
const dollarimg  = document.getElementById('dollarimg')
const seccondh  = document.getElementById('seccondh')
const secondp  = document.getElementById('secondp')
const thirdp  = document.getElementById('thirdp')

svgdollar.style.display ='none'





window.onload = function() {
  content.style.width = '370px';
  content.style.height = '350px';
  firsth2.style.display='flex'
  dollarimg.style.display ='none'
}
setTimeout(() => {
  document.getElementById('title').classList.add("titplegap")
  title.style.display ='flex'
  updiv.style.display ='flex'
  circularProgress.style.display ='flex'
  progressValue.style.display ='flex'
  svgdollar.style.display ='flex'
}, 100);

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
          progressStartValue = 0;
      }
  }, speed);
}
startProgress()


  
///////////second
function secondpart(){
  title.style.display ='none'
  updiv.style.display ='none'
  circularProgress.style.display ='none'
  progressValue.style.display ='none'
  svgdollar.style.display ='none'
}
setTimeout(secondpart, 4020);
setTimeout(() => {
  secondsvg.style.display = 'flex';
  secondsvg.style.opacity = 1;
  secondsvg.style.transform = 'translateY(0) scale(1)';
}, 4530);

setTimeout(() => {
  seccondh.style.display = 'flex';
  seccondh.style.opacity = 1;
  seccondh.style.transform = 'translateY(0) scale(1)';
}, 4550);

setTimeout(() => {
  secondp.style.display = 'flex';
  secondp.style.opacity = 1;
  secondp.style.transform = 'translateY(0) rotate(0)';
}, 4550);


// display none second part
setTimeout(() => {
  secondsvg.style.transform = 'translateY(55px)';
    secondsvg.style.transition = 'transform 1s ease-in-out';
  },6500);
 
  setTimeout(() => {
    secondp.style.transform = 'translateY(-55px)';
    secondp.style.transition = 'transform 1s ease-in-out'; 
    seccondh.style.transform = 'translateY(-45px)';
    seccondh.style.transition = 'transform 1s ease-in-out'; 
  },6400);
 
  
  setTimeout(() => {
    secondp.style.display ='none'
    secondsvg.style.display ='none'
    seccondh.style.display ='none' 
  },7000);

  setTimeout(() => {
    thirdp.style.display ='flex'
    thirdp.style.transform = 'translateY(5px)';
    thirdp.style.transition = 'transform 3s ease-in-out'; 
    dollarimg.style.display='flex'
    content.style.display ='flex'
    circularProgress.style.display ='flex'
    circularProgress.style.top ='70px'
    circularProgress.style.transform = 'translateY(5px)';
    circularProgress.style.transition = 'transform 1s ease-in-out'; 
    
  },7600);
  function thirdpart(){
    title.style.display ='none'
    updiv.style.display ='none'
    svgdollar.style.display ='none'
    secondsvg.style.display ='none'
    seccondh.style.display ='none'
    secondp.style.display ='none'
    startProgress()
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
}, 11500);


