document.addEventListener('DOMContentLoaded', function() {
  const svgWrapper = document.querySelector('.svg-wrapper');
  const svgWrapper2 = document.querySelector('.svg-wrapper2');

  function triggerAnimation() {
    document.getElementById('first').style.display = 'flex';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';

    svgWrapper.classList.add('active');
    setTimeout(function() {
      document.getElementById('first').style.display = 'none';
      document.getElementById('second').style.display = 'flex';
    }, 7000); 
    setTimeout(function() {
      document.getElementById('first').style.display = 'none';
      document.getElementById('second').style.display = 'none';
      document.getElementById('third').style.display = 'flex';
    }, 9000); 
  }
  svgWrapper.classList.remove('active');
  // svgWrapper2.classList.add('active');
  setTimeout(triggerAnimation, 1000); 
});

