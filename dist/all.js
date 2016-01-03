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

  //set height for the .cd-background-wrapper
  $('.parallaxWrapper').css({
    'height' : $(window).height()
  });
  
  //set dimensions and position of the .cd-background-wrapper
  $('.parallaxBG').css({
    'left' : newLeft,
    'top' : newTop,
    'width' : newImageWidth,
    'max-width' : '100%'
  });

  // set dimensions for hover-effects div
  $('.hover-effects').css({
    'left' : newLeft * 0.6,
    'width' : newImageWidth * 1.015,
    'max-width' : '100%'
  });

  if ( $('.parallaxWrapper').height() < $('.parallaxBG').height() ) {
    $('.hover-effects').css({
      'height' : $('.parallaxWrapper').height()
    });
  } else {
    $('.hover-effects').css({
      'height' : $('.parallaxBG').height()
    });
  }
}

// js goes here
$(function() {
	// get css 'content' value + remove extra quotes
  var mediaQuery = window.getComputedStyle(document.querySelector('.parallaxWrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
  
  // define initial variables
  var halfHeight = $(window).height() / 2,
      halfWidth = $(window).width() / 2;

  // define X-Y-axes max rotation
  var maxRotationX = 3,
      maxRotationY = 5,
      aspectRatio;

  // set aspect ratio & first load background
  $('.parallaxBG').find('img').eq(0).load(function() {
  	aspectRatio = $(this).width() / $(this).height();

  	if (mediaQuery == 'web') {
  		initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio);
  	}
  });

  // animate text
  $('.text').not(':first').hide();
  setInterval(function() {
    $('#text' + textIndex).fadeOut(fadeSpeed);
    if (textIndex == $('.text').length) {
      textIndex = 1;
    } else {
      ++textIndex;
    }
    $('#text' + textIndex).delay(fadeSpeed).fadeIn(fadeSpeed);
  }, interval);

  // detect mouse movement
  $(window).on('mousemove', function(e) {
  	if (mediaQuery == 'web') {
  		window.requestAnimationFrame(function() {
  			moveBackground(e, halfWidth, halfHeight, maxRotationX, maxRotationY);
  		});
  	}
  });

  // on resize
  $(window).on('resize', function() {
  	// adjust image sizes
  	mediaQuery = window.getComputedStyle(document.querySelector('.parallaxWrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
  	if (mediaQuery == 'web') {
  		window.requestAnimationFrame(function() {
  			halfWidth = $(window).width() * 0.5;
  			halfHeight = $(window).height() * 0.5;
  			aspectRatio = halfWidth*2 / halfHeight*2;
	  		initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio);
  		});
  	} else {
  		$('.parallaxWrapper').attr('style', '');
  	}
  });

  // hover & click effects
  $('#topHover').click(function() {
    $('.triggers').toggleClass('hidden');
    $(this).removeClass('hidden');
    $('#aboutMe').toggleClass('showing');
  });

  $('#bottomHover').click(function() {
    $('.triggers').toggleClass('hidden');
    $(this).removeClass('hidden');
    $('#contactInfo').toggleClass('showing');
  });
});



$(function() {
  var interval = 7000;
  var fadeSpeed = 500;
  var textIndex = 1;

  // animate text
  $('.text').not(':first').hide();
  setInterval(function() {
    $('#text' + textIndex).fadeOut(fadeSpeed);
    if (textIndex == $('.text').length) {
      textIndex = 1;
    } else {
      ++textIndex;
    }
    $('#text' + textIndex).delay(fadeSpeed).fadeIn(fadeSpeed);
  }, interval);
});
$(function() {
  // hover & click effects
  $('#topHover').click(function() {
    $('.triggers').toggleClass('hidden');
    $(this).removeClass('hidden');
    $('#aboutMe').toggleClass('showing');
  });

  $('#bottomHover').click(function() {
    $('.triggers').toggleClass('hidden');
    $(this).removeClass('hidden');
    $('#contactInfo').toggleClass('showing');
  });
});

// slider
var ProfileWebsite = angular.module('ProfileWebsite', ['ngTouch']);

ProfileWebsite.controller('SliderCtrl', ['$scope', function($scope) {
  $scope.slides = [
    {image : 'images/kenny_portrait.jpg', description : 'Image 00'},
    {image : 'images/kenny_bg.jpg', description : 'Image 01'},
    {image : 'images/aveconcept.png', description : 'Image 02'},
    {image : 'images/public_art_hk.png', description : 'Image 03'},
    {image : 'images/willey_printing.png', description : 'Image 04'}
  ];
}]);
