$(document).ready(function() {
    $('.stepone').click(function() {
      $('.btn').removeClass('stepone');
      $('.btn').addClass('steptwo');
      $('#firsttrimester').effect('slide');
      $('#firsttrimestertext').fadeIn(2500);
      $('#initialexplainertext').change('#firstexplainertext');
    });
  });
