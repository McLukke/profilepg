//functions
function moveBackground(e) {
  var rotateY = ((-e.pageX+halfWindowW)/halfWindowW) * maxRotationY;
  var rotateX = ((e.pageY-halfWindowH)/halfWindowH) * maxRotationX;

  if(rotateY > maxRotationY)
    rotateY = maxRotationY;
  if(rotateY < -maxRotationY)
    rotateY = -maxRotationY;
  if(rotateX > maxRotationX)
    rotateX = maxRotationX;
  if(rotateX < -maxRotationX)
    rotateX = -maxRotationX;

  $('.parallax-bg').css({
    '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
  });
}

function initBackground() {
  var wrapperHeight = Math.ceil(halfWindowW * 2 / aspectRatio);
  var proportions = ( maxRotationY > maxRotationX ) ? 
  	1.1 / (Math.sin(Math.PI / 2 - maxRotationY * Math.PI / 180)) :
  	1.1 / (Math.sin(Math.PI / 2 - maxRotationX * Math.PI / 180));
  var newImageWidth = Math.ceil(halfWindowW * 1.75 * proportions); // originally halfWindowW * 2
  var newImageHeight = Math.ceil(newImageWidth / aspectRatio);
  var newLeft = halfWindowW - newImageWidth / 2;
  var newTop = (wrapperHeight - newImageHeight) / -2;

  //set an height for the .cd-background-wrapper
  $('.parallaxWrapper').css({
    'height' : $(window).height(),
  });
  
  //set dimensions and position of the .cd-background-wrapper
  $('.parallaxBG').addClass('is-absolute').css({
    'left' : newLeft,
    'top' : newTop,
    'width' : newImageWidth,
    'max-width' : '100%'
  });
}