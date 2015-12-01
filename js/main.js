// js goes here
$(function () {
	
});


$(function() {
  var mediaQuery = window.getComputedStyle(document.querySelector('.parallax-wrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
    //define store some initial variables
  var halfWindowH = $(window).height() * 0.5;
  var halfWindowW = $(window).width() * 0.5;
  //define a max rotation value (X and Y axises)
  var maxRotationY = 5;
  var maxRotationX = 3;
  var aspectRatio;

  //detect if hero <img> has been loaded and evaluate its aspect-ratio
  $('.parallax-bg').find('img').eq(0).load(function() {
    aspectRatio = $(this).width() / $(this).height();

    // console.log($(this).width());
    // console.log($(this).height());
    // console.log(`aspectRatio: ${aspectRatio}`);
    // console.log(`mediaQuery: ${mediaQuery}`);

    if (mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
      initBackground()
    };
  }).each(function() {
    //check if image was previously load - if yes, trigger load event
    if (this.complete)
      $(this).load();
  });

  //init textillate
  loadTextillate(jQuery);


  if ($(window).width() >= 980) {
    // animate heading
    $('.teaser-heading--enhanced').textillate({
      minDisplayTime: 8000,
      in: {
        effect: 'fadeIn',
        shuffle: false,
        sync: true
      },
      out: {
        effect: 'fadeOut',
        shuffle: false,
        sync: true
      },
      loop: true
    });

    // animate text
    $('.teaser-copy--enhanced').textillate({
      // initialDelay: 120,
      minDisplayTime: 8000,
      in: {
        effect: 'fadeIn',
        shuffle: false,
        sync: true
      },
      out: {
        effect: 'fadeOut',
        shuffle: false,
        sync: true
      },
      loop: true
    });
  } else {
    console.log(`not initializing textillate`);
  }

  //detect mouse movement
  // $('.parallax-wrapper').on('mousemove', function(e) {
  $(window).on('mousemove', function(e) {
    if(mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
      window.requestAnimationFrame(function(){
        moveBackground(e);
      });
    }
  });

  //on resize - adjust .parallax-wrapper and .parallax-bg dimensions and position
  $(window).on('resize', function() {mediaQuery = window.getComputedStyle(document.querySelector('.parallax-wrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
    if (mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
      window.requestAnimationFrame(function() {
        halfWindowH = $(window).height() * 0.5;
        halfWindowW = $(window).width() * 0.5;

        // console.log('reexecuting initBackground()');
        initBackground();
      });
    } else {
      $('.parallax-wrapper').attr('style', '');
      $('.parallax-bg').attr('style', '').removeClass('is-absolute');
    }
  });

  //on resize - stop/start textillate
  $(window).resize(_.debounce(function() {
    if ($(window).width() >= 980) {
      $('.teaser-heading--enhanced').textillate('start');
      $('.teaser-copy--enhanced').textillate('start');
    } else {
      $('.teaser-heading--enhanced').textillate('stop');
      $('.teaser-copy--enhanced').textillate('stop');
    }
  }, 100));
});