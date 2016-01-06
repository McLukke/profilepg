// js goes here
$(function() {
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

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
  if ( isMobile.any() ) {
    $('#foreground').addClass('hidden');
  } else {
    window.addEventListener('mousemove', function(e) {
      if (mediaQuery == 'web') {
        $('#foreground').removeClass('hidden');
        window.requestAnimationFrame(function() {
          moveBackground(e, halfWidth, halfHeight, maxRotationX, maxRotationY);
        });
      }
    }, false);
  }

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


