// aos--
AOS.init();

// <!-- owl carousel 2-->

  $("#owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    items: 4,
    autoplay:true,
    responsive: {
      // breakpoint from 0 up
    0: {
        items: 1,
      },
      // breakpoint from 480 up
      // breakpoint from 768 up
      768: {
        items: 3,
      },

      1200: {
        items: 4,
      },
    },
  });

// <!-- owl carousel 3 -->

  $("#owl-carousel2").owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    items: 4,
    autoplay:true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      // breakpoint from 768 up
      768: {
        items: 3,
      },

      1200: {
        items: 4,
      },
    },
  });

// <!-- owl carousel 4 -->

  $("#owl-carousel4").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: true,
    items: 5,
    autoplay:true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        
      },
      // breakpoint from 480 up
      // breakpoint from 768 up
      768: {
        items: 3,
      },

      1200: {
        items: 5,
      },
    },
  });








  


