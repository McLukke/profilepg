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

  // init textillate
  loadTextillate(jQuery);
});


// $(function() {
//   //init textillate
//   loadTextillate(jQuery);


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
