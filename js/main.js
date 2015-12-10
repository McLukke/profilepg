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

  // on hover
  $('#leftHover').mouseenter(function() {
    $(this).css({'width':'90%'});
    $('#leftHover img').css({'width':'100%'});
    $('#rightHover').css({'width':'0%'});
  }).mouseleave(function() {
    $(this).css({'width':'10%'});
    $('#leftHover img').css({'width':'0%'});
    setTimeout(function() {
      $('#rightHover').css({'width':'10%'});
    }, 2000);
  });

  $('#topHover').mouseenter(function() {
    $(this).css({'height':'90%'});
    $('#topHover img').css({'height':'100%'});
    $('#contactHover').css({'height':'0%'});
  }).mouseleave(function() {
    $(this).css({'height':'10%'});
    $('#topHover img').css({'height':'0%'});
    setTimeout(function() {
      $('#contactHover').css({'height':'10%'});
    }, 2000);
  });

  $('#rightHover').mouseenter(function() {
    $(this).css({'width':'90%'});
    $('#rightHover img').css({'width':'100%'});
    $('#leftHover').css({'width':'0%'});
  }).mouseleave(function() {
    $(this).css({'width':'10%'});
    $('#rightHover img').css({'width':'0%'});
    setTimeout(function() {
      $('#leftHover').css({'width':'10%'});
    }, 2000);
  });

  $('#contactHover').mouseenter(function() {
    $(this).css({
      'height' : '90%',
      'background' : 'rgba(0,0,0,0.8)'
    });
    $('#contactHover #contactInfo').removeClass('hidden');
    $('#topHover').css({'height':'0%'});
  }).mouseleave(function() {
    $(this).css({'height':'10%'});
    $('#contactHover #contactInfo').addClass('hidden');
    setTimeout(function() {$(contactHover).css({'background':'rgba(0,0,0,0)'})}, 500);
    setTimeout(function() {
      $('#topHover').css({'height':'10%'});
    }, 2000);
  });
});


