var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }, 
  animationWindow = select('#animationWindow'),
  anim = lottie.loadAnimation({
  container: animationWindow, 
  renderer: 'svg',
  loop: true,
  autoplay: true,

  path: 'https://assets.codepen.io/35984/heart_eyes_burst.json' 
});

 anim.addEventListener('DOMLoaded', onDOMLoaded);
 anim.setSpeed(1);

function onDOMLoaded(e){ 


}
