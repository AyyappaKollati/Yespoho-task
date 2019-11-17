$(document).ready(function () {

  // mobile view nav click 

  $("#mobile-menu").click(function () {
    $("body").toggleClass("menu-open");
  });
  $(".menu-overlay").click(function () {
    $("body").removeClass("menu-open");
  })

  // Home banner carousel
  $('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      }

    }
  });

  // Best seller carouse

  $('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

});