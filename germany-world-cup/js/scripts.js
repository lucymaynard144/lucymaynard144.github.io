$(document).ready(function() {
  $('button').click(function() {
      $('.legendbox').toggle();
      $('.flipflop').toggle();
      $('button').toggleClass('btn-danger');
  });
});
