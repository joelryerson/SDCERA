//FADE IN IMAGE & strength_service_commitment

$(function() {
  $('#fadeIn_image').hide().fadeIn(3000);
});

$(function() {
  $('fadeIn_strength').hide().delay(3000).fadeIn(2000, function() {
    $('fadeIn_strength').fadeOut('slow');
  });
});

$(function() {
  $('fadeIn_service').hide().delay(6000).fadeIn(2000, function() {
    $('fadeIn_service').fadeOut('slow');
  });
});

$(function() {
  $('fadeIn_commitment').hide().delay(9000).fadeIn(2000, function() {
    $('fadeIn_commitment').fadeOut('slow');
  });
});

$(function() {
  $('fadeIn_all').hide().delay(12000).fadeIn(2000);
});
