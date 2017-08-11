$(document).ready(function() {
    $(document).on("click", ".stepone", function() {
      $('.btn').removeClass('stepone');
      $('.btn').addClass('steptwo');
      $('#firsttrimester').effect('slide');
      $('#firsttrimestertext').fadeIn(2700);
      $('#initialexplainertext').hide();
      $('#firstexplainertext').show();
      $('#buttonone').hide();
      $('#buttontwo').show();
      $('#zeropercent').show();
      $('#percentofwomen').show();
      $('#hundredpercent').show();
    });
    $(document).on("click", ".steptwo", function() {
      $('.btn').removeClass('steptwo');
      $('.btn').addClass('stepthree');
      $('#secondtrimester').effect('slide');
      $('#secondtrimestertext').fadeIn(2700);
      $('#firstexplainertext').hide();
      $('#secondexplainertext').show();
      $('#buttontwo').hide();
      $('#buttonthree').show();
    });
    $(document).on("click", ".stepthree", function() {
      $('.btn').removeClass('stepthree');
      $('.btn').addClass('steprepeat');
      $('#thirdtrimester').effect('slide');
      $('#nocare').effect('slide');
      $('#secondexplainertext').hide();
      $('#thirdandnoexplainertext').show();
      $('#buttonthree').hide();
      $('#buttonfirst').show();
    });
    $(document).on("click", ".steprepeat", function() {
      $('.btn').removeClass('steprepeat');
      $('.btn').addClass('stepone');
      $('#firsttrimester').hide();
      $('#secondtrimester').hide();
      $('#thirdtrimester').hide();
      $('#nocare').hide();
      $('#thirdandnoexplainertext').hide();
      $('#initialexplainertext').show();
      $('#buttonfirst').hide();
      $('#buttonone').show();
      $('#zeropercent').hide();
      $('#percentofwomen').hide();
      $('#hundredpercent').hide();
    });
  });
