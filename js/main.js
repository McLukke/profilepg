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

  // set aspect ratio
  $('.parallaxBG').find('img').eq(0).load(function() {
  	aspectRatio = $(this).width() / $(this).height();

  	if (mediaQuery == 'web') {
  		initBackground();
  	}
  });

});


// $(function() {
//   if ($(window).width() >= 980) {
//     // animate heading
//     $('.teaser-heading--enhanced').textillate({
//       minDisplayTime: 8000,
//       in: {
//         effect: 'fadeIn',
//         shuffle: false,
//         sync: true
//       },
//       out: {
//         effect: 'fadeOut',
//         shuffle: false,
//         sync: true
//       },
//       loop: true
//     });

//     // animate text
//     $('.teaser-copy--enhanced').textillate({
//       // initialDelay: 120,
//       minDisplayTime: 8000,
//       in: {
//         effect: 'fadeIn',
//         shuffle: false,
//         sync: true
//       },
//       out: {
//         effect: 'fadeOut',
//         shuffle: false,
//         sync: true
//       },
//       loop: true
//     });
//   } else {
//     console.log(`not initializing textillate`);
//   }

//   //detect mouse movement
//   // $('.parallax-wrapper').on('mousemove', function(e) {
//   $(window).on('mousemove', function(e) {
//     if(mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
//       window.requestAnimationFrame(function(){
//         moveBackground(e);
//       });
//     }
//   });

//   //on resize - adjust .parallax-wrapper and .parallax-bg dimensions and position
//   $(window).on('resize', function() {mediaQuery = window.getComputedStyle(document.querySelector('.parallax-wrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
//     if (mediaQuery == 'web' && $('html').hasClass('preserve-3d')) {
//       window.requestAnimationFrame(function() {
//         halfWindowH = $(window).height() * 0.5;
//         halfWindowW = $(window).width() * 0.5;

//         // console.log('reexecuting initBackground()');
//         initBackground();
//       });
//     } else {
//       $('.parallax-wrapper').attr('style', '');
//       $('.parallax-bg').attr('style', '').removeClass('is-absolute');
//     }
//   });

//   //on resize - stop/start textillate
//   $(window).resize(_.debounce(function() {
//     if ($(window).width() >= 980) {
//       $('.teaser-heading--enhanced').textillate('start');
//       $('.teaser-copy--enhanced').textillate('start');
//     } else {
//       $('.teaser-heading--enhanced').textillate('stop');
//       $('.teaser-copy--enhanced').textillate('stop');
//     }
//   }, 100));
// });
