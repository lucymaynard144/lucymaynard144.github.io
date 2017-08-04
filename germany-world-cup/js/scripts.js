$(document).ready(function() {
  $('.btnone').click(function() {
    $('.legendbox').toggle();
    $('.flipflop').toggle();
    $('.btnone').toggleClass('btn-danger');
  });
  $('.btntwo').click(function() {
    $('.btntwo').toggleClass('btn-danger');
    $('.fliptwo').toggle();
    var series= chart.series[1];
    if (series.visible) {
      series.hide();
    }
    else {
      series.show();
    }
  });
});
