document.addEventListener('DOMContentLoaded', function() {
  const svgWrapper = document.querySelector('.svg-wrapper');
  const title = document.getElementById('title')

  const updiv = document.getElementById('updiv')
  const svgwrapper = document.getElementById('svgwrapper')
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

  const shape = document.querySelector('.shape');
 
  
  window.onload = function() {
    content.style.width = '370px';
    content.style.height = '350px';
    // title.style.display ='flex'
    firsth2.style.display='flex'
  }

///first
  function triggerAnimation() {
    svgWrapper.classList.add('active');  
  }
  setTimeout(triggerAnimation, 1000);
///////////second
function secondpart(){
  title.style.display ='none'
  updiv.style.display ='none'
  svgwrapper.style.display ='none'
  svgdollar.style.display ='none'
}
setTimeout(secondpart, 6000);

setTimeout(() => {
secondsvg.style.display ='flex'
secondp.style.display ='flex'
}, 6500);

setTimeout(() => {
seccondh.style.display ='flex'
  
},6700);


//display none second part
setTimeout(() => {
  secondsvg.style.transform = 'translateY(55px)';
    secondsvg.style.transition = 'transform 1s ease-in-out';
  },8600);
 
  setTimeout(() => {
    secondp.style.transform = 'translateY(-55px)';
    secondp.style.transition = 'transform 1s ease-in-out'; 
    seccondh.style.transform = 'translateY(-45px)';
    seccondh.style.transition = 'transform 1s ease-in-out'; 
  },8500);
 
  
  setTimeout(() => {
    secondp.style.display ='none'
    secondsvg.style.display ='none'
    seccondh.style.display ='none' 
  },8870);

  ///additional 
  setTimeout(function (){
    svgWrapper.classList.remove('active');

  },7500)

  setTimeout(function (){
    svgWrapper.classList.add('active');
  },10000)

  


  

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
    svgwrapper.style.display ='flex'
    svgwrapper.style.top ='151px'
}
setTimeout(thirdpart, 9500);
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
}, 13730);


setTimeout(() => {
  content.style.display = 'none'; 
  thirdp.style.display = 'none';
  dollarimg.style.display = 'none';
  seconddiv.style.display = 'none';
}, 15000);

