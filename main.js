document.addEventListener('DOMContentLoaded', function() {
  const svgWrapper = document.querySelector('.svg-wrapper');
  const title = document.getElementById('title')
  const updiv = document.getElementById('updiv')
  const svgwrapper = document.getElementById('svgwrapper')
  const svgdollar = document.getElementById('svgdollar')
  const seconddiv = document.getElementById('seconddiv')
  const secondsvg = document.getElementById('secondsvg')
  const  content =document.getElementById('content')
  const  firsth2 =document.getElementById('firsth2')
  secondsvg.style.display ='none'
  seconddiv.style.display='none'
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
    var content = document.getElementById("content");

   
  //   setTimeout(function() {
  //     updiv.style.width="350px"
  //     updiv.style.height="50px"
  //     firsth2.style.fontSize="16px"
  // }, 200);
};
  function triggerAnimation() {

    svgWrapper.classList.add('active');
    setTimeout(function() {   
      document.getElementById('first').style.display = 'flex';
    }, 3000); 
  }

  setTimeout(function (){
    svgWrapper.classList.remove('active');
  },7500)

  setTimeout(function (){
    svgWrapper.classList.add('active');
  },10000)

  setTimeout(triggerAnimation, 1000);

  function secondpart(){
      title.style.display ='none'
      updiv.style.display ='none'
      // content.style.display ='none'
      svgwrapper.style.display ='none'
      svgdollar.style.display ='none'
  }
  setTimeout(secondpart, 6000);
  setTimeout(() => {
    seconddiv.style.display='flex' 
    secondsvg.style.display ='flex'
 }, 6800);
 setTimeout(() => {
  seccondh.style.display ='flex'
      
 },7000);
 setTimeout(() => {
  secondp.style.display ='flex'
 }, 7100);
  

//   function thirdpart(){
//     svgwrapper.style.display ='flex'
//     title.style.display ='none'
//     updiv.style.display ='none'
//     svgdollar.style.display ='none'
//     secondsvg.style.display ='none'
//     seccondh.style.display ='none'
//     secondp.style.display ='none'
//     thirdp.style.display ='flex'
//     dollarimg.style.display='flex'
//     seconddiv.style.display='none'
//     content.style.display ='flex'
// }
setTimeout(thirdpart, 9500);
});

// setTimeout(() => {
//   content.style.transition = 'transform 2s ease-in-out'; // Apply transition for smooth animation
//   content.style.transform = 'translateY(-500px)';
//   dollarimg.style.transition = 'transform 2s ease-in-out'; 
//   dollarimg.style.transform = 'translateY(-500px)'; // Move content upward
//   seconddiv.style.transform = 'translateY(-500px)';
//   seconddiv.style.transition = 'transform 2s ease-in-out'; 
//   thirdp.style.transform = 'translateY(-500px)';
//   thirdp.style.transition = 'transform 2s ease-in-out'; 
// }, 15730);


// setTimeout(() => {
//   content.style.display = 'none'; 
//   thirdp.style.display = 'none';
//   dollarimg.style.display = 'none';
//   seconddiv.style.display = 'none';
// }, 17000);

