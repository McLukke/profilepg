//functions
function moveBackground(e, halfWidth, halfHeight, maxRotationX, maxRotationY) {
  var rotateY = ((-e.pageX+halfWidth)/halfWidth) * maxRotationY;
  var rotateX = ((e.pageY-halfHeight)/halfHeight) * maxRotationX;

  if(rotateY > maxRotationY)
    rotateY = maxRotationY;
  if(rotateY < -maxRotationY)
    rotateY = -maxRotationY;
  if(rotateX > maxRotationX)
    rotateX = maxRotationX;
  if(rotateX < -maxRotationX)
    rotateX = -maxRotationX;

  $('.parallaxBG').css({
    '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
  });
}

function initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio) {
  var wrapperHeight = Math.ceil(halfWidth * 2 / aspectRatio);
  var proportions = ( maxRotationY > maxRotationX ) ? 
  	1.1 / (Math.sin(Math.PI / 2 - maxRotationY * Math.PI / 180)) :
  	1.1 / (Math.sin(Math.PI / 2 - maxRotationX * Math.PI / 180));
  var newImageWidth = Math.ceil(halfWidth * 1.75 * proportions); // originally halfWidth * 2
  var newImageHeight = Math.ceil(newImageWidth / aspectRatio);
  var newLeft = halfWidth - newImageWidth / 2;
  var newTop = (wrapperHeight - newImageHeight) / -2;

  //set an height for the .cd-background-wrapper
  $('.parallaxWrapper').css({
    'height' : $(window).height(),
  });
  
  //set dimensions and position of the .cd-background-wrapper
  $('.parallaxBG').css({
    'left' : newLeft,
    'top' : newTop,
    'width' : newImageWidth,
    'max-width' : '100%'
  });
}