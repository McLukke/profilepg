// js goes here
$(function () {
	// get css 'content' value + remove extra quotes
  var mediaQuery = window.getComputedStyle(document.querySelector('.parallaxWrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
  
  // define initial variables
  var halfHeight = $(window).height() / 2;
  var halfWidth = $(window).width() / 2;

  // define X-Y-axes max rotation
  var maxRotationX = 3;
  var maxRotationY = 5;
  var aspectRatio;

  // set aspect ratio & first load background
  $('.parallaxBG').find('img').eq(0).load(function() {
  	aspectRatio = $(this).width() / $(this).height();

  	if (mediaQuery == 'web') {
  		initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio);
  	}
  });

  if ($(window).width() >= 980) {
	  // animate title
	  $('#desktop_content .title').textillate({
	  	minDisplayTime: 2000,
	  	in: {
	  		selector: '.title',
	  		effect: 'fadeIn',
	  		shuffle: false,
	  		sync: true,
	  		autoStart: false
	  	},
	  	out: {
	  		selector: '.title',
	  		delay: 6,
	  		effect: 'fadeIn',
	  		shuffle: false,
	  		sync: true,
	  		autoStart: false
	  	},
	  	loop: true
	  });

    // animate text
	  $('#desktop_content .text').textillate({
	  	minDisplayTime: 2000,
	  	in: {
	  		selector: '.text',
	  		effect: 'fadeIn',
	  		shuffle: false,
	  		sync: true,
	  		autoStart: false
	  	},
	  	out: {
	  		selector: '.text',
	  		delay: 6,
	  		effect: 'fadeIn',
	  		shuffle: false,
	  		sync: true,
	  		autoStart: false
	  	},
	  	loop: true
	  });
  }

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
  	console.log('window.width() = ' + $(window).width());
  	console.log('window.height() = ' + $(window).height());
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


