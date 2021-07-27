$(document).ready(function () {
  // ======= Dropdown actions ======= //
  $(document).on("click", ".header-top .dropdown-top", function () {
    $(this).next().toggleClass("show-dropdown");
    $(this).children(".flaticon-down-arrow").toggleClass("rotate-arrow");

    $(document).on("click", ".dropdownn ul li", function () {
      $(this).parent().prev().children(".wrapper").html($(this).html());
      $(this).parent().prev().children("i").removeClass("rotate-arrow");
      $(this).parent().removeClass("show-dropdown");
    });
  });

  $(document).on("click", ".categories-top-content", function () {
    $(this).next().toggleClass("show-categories-dropdown");
    $(this).children(".flaticon-down-arrow").toggleClass("rotate-arrow");
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (
      !$(".dropdownn").is(e.target) &&
      $(".dropdownn").has(e.target).length === 0
    ) {
      $(".dropdownn ul").removeClass("show-dropdown");
      $(".categories-dropdown").removeClass("show-categories-dropdown");
      $(".dropdown-top .flaticon-down-arrow").removeClass("rotate-arrow");
    }
  });

  // ======= Countdown ======= //
  $(".countdown-active").countdown("2022/05/01", function (e) {
    $(this).html(e.strftime(
        `<div class="single-countdown">
            <h2>%D</h2>
            <span>Days</span>
        </div>
        <div class="single-countdown">
            <h2>%H</h2>
            <span>Hrs</span>
        </div>
        <div class="single-countdown">
            <h2>%M</h2>
            <span>Min</span>
        </div>
        <div class="single-countdown">
            <h2>%S</h2>
            <span>Sec</span>
        </div>`
      )
    );
  });

  // ======= Owl-Carousel for Best Seller section ======= //
  $(".best-seller-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
    nav: true,
    navText : ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // ======= Owl-Carousel for New Arrivals section ======= //
  $(".new-arrivals-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
    nav: true,
    navText : ["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});