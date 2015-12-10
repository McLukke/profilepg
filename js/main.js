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

  // original on hover
  $('#leftHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#leftHover img').addClass('showing');
    $('#rightHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#leftHover img').removeClass('showing');
    setTimeout(function() {
      $('#rightHover').removeClass('step-out');
    }, 2000);
  });

  $('#topHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#topHover img').addClass('showing');
    $('#contactHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#topHover img').removeClass('showing');
    setTimeout(function() {
      $('#contactHover').removeClass('step-out');
    }, 2000);
  });

  $('#rightHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#rightHover img').addClass('showing');
    $('#leftHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#rightHover img').removeClass('showing');
    setTimeout(function() {
      $('#leftHover').removeClass('step-out');
    }, 2000);
  });

  $('#contactHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#contactInfo').addClass('showing');
    $('#topHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#contactInfo').removeClass('showing');
    setTimeout(function() {
      $('#topHover').removeClass('step-out');
    }, 2000);
  });

});


