$(function() {
    let $win = $(window),
        $header = $('header'),
        headerHeight = $header.outerHeight(),
        startPos = 0;
  
    $win.on('load scroll', function() {
      let value = $(this).scrollTop();
      if ( value > startPos && value > headerHeight ) {
        $header.css('top', '-' + headerHeight + 'px');
      } else {
        $header.css('top', '0');
      }
      startPos = value;
    });
  });