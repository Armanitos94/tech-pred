$(document).ready(function() {
 
 
   $('a[href^="#"]').click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 65 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

   // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  // Initialize Venobox
  $(window).on('load', function() {
    $('.venobox').venobox({
      bgcolor: '',
      overlayColor: 'rgba(6, 12, 34, 0.85)',
      closeBackground: '',
      closeColor: '#fff',
      share: false
    });
  });
 
 
});