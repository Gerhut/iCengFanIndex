$(function () {
  var $body = $('body');
  var $header = $('header');
  var $carouselItem = $('.carousel .item');
  var timeout = -1;

  function dynamicLayout() {
    function work () {
      $body.css('margin-top', 10 + $header.height() + 'px');
      $carouselItem.height($body.width() / 2);
      timeout = -1;
    }
    if (timeout == -1)
      timeout = setTimeout(work, 500);
  }
  $(dynamicLayout);
  $(window).on('resize', dynamicLayout);
});
