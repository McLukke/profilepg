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
