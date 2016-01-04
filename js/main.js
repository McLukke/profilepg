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

  var interval = 7000;
  var fadeSpeed = 500;
  var textIndex = 1;
  var textArray = $('.text');

  // set aspect ratio & first load background
  $('.parallaxBG').find('img').eq(0).load('index.php .parallaxBG', function() {
  	aspectRatio = $(this).width() / $(this).height();

  	if (mediaQuery == 'web') {
  		initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio);
  	}
  });

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
});


