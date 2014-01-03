$(function () {
  var $body = $('body')
    , $header = $('header')
    , $carouselItem = $('.carousel .item');
  function dynamicLayout() {
    $body.css('margin-top', $header.height());
    $header.css('margin-left', -$header.outerWidth() / 2 + 'px');
    $carouselItem.height($body.width() / 2);
  }
  $(dynamicLayout);
  $(window).on('resize', dynamicLayout);
});
