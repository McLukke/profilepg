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