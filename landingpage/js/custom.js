/*==============================
        WOW
================================*/
$(function() {
    // Handler for .ready() called.
    new WOW().init();

});
/*==========================================
        Magnific Popup
http://dimsemenov.com/plugins/magnific-popup/
===========================================*/
$(function() {
    // Handler for .ready() called.
    $('#work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
          enabled: true
      }
      // other options
    });

});

/*==========================================
        Owl Carousel
http://owlcarousel2.github.io/OwlCarousel2/index.html
===========================================*/
$(function() {
    // Handler for .ready() called.
    $(".owl-carousel").owlCarousel({
        items : 3,
    });

});

