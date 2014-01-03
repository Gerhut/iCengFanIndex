$(function () {
  var $body = $('body');
  var $header = $('header');
  var $carouselItem = $('.carousel .item');
  var timeout = -1;

  function dynamicLayout() {
    function work () {
      $body.css('margin-top', 10 + $header.height() + 'px');
      timeout = -1;
    }
    if (timeout == -1)
      timeout = setTimeout(work, 300);
  }
  $(dynamicLayout);
  $(window).on('resize', dynamicLayout);
});
