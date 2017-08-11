$(document).ready(function() {
    $('.stepone').click(function() {
      $('.btn').removeClass('stepone');
      $('.btn').addClass('steptwo');
      $('#firsttrimester').effect('slide');
      $('#firsttrimestertext').fadeIn(2700);
      $('#initialexplainertext').hide();
      $('#firstexplainertext').show();
      $('#buttonone').hide();
      $('#buttontwo').show();
    });
    $('.steptwo').click(function() {
      $('.btn').removeClass('steptwo');
      $('.btn').addClass('stepthree');
      $('#secondtrimester').effect('slide');
      $('#secondtrimestertext').fadeIn(2700);
      $('#firstexplainertext').hide();
      $('#secondexplainertext').show();
      $('#buttontwo').hide();
      $('#buttonthree').show();
    });
  });
