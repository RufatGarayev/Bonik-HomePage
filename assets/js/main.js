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

  // ======= Events On Scroll ======= //
  $(window).scroll(function () {
    // back-to-top btn
    if ($(this).scrollTop() > 300) {
      $("#back-to-top-btn").show();
    } else {
      $("#back-to-top-btn").hide();
    }

    // making the header sticky
    if ($(this).scrollTop() >= 121) {
      $(".header-bottom-wrapper").addClass("sticky");
      $(".header-bottom-wrapper .actions").show();
      $(".header-bottom-wrapper .brand").show();
      $(".header-bottom-wrapper .categories-top-content").css("background-color", "#fff");
      $(".header-bottom-wrapper .categories-top-content p").hide();
    } else {
      $(".header-bottom-wrapper").removeClass("sticky");
      $(".header-bottom-wrapper .actions").hide();
      $(".header-bottom-wrapper .brand").hide();
      $(".header-bottom-wrapper .categories-top-content").css("background-color", "#f3f5f9");
      $(".header-bottom-wrapper .categories-top-content p").show();
    }
  });

  $("#back-to-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  // ======= Increasing or decreasing the quantity input value ======= //
  let quantityInput = $('#quickViewModal input[type="text"]');
  let currentVal = parseInt(quantityInput.val());

  // decrease action
  $(document).on("click", "#quickViewModal .minus-btn", function () {
    if (!isNaN(currentVal)) {
      quantityInput.val(currentVal -= 1);
      $("#quickViewModal .plus-btn").prop("disabled", false);
      $("#quickViewModal .plus-btn").css("cursor", "pointer");
    }

    if(currentVal === 1){
      $(this).prop("disabled", true);
      $(this).css("cursor", "default");
    }else{
      $(this).prop("disabled", false);
    }
  });

  // increase action
  $(document).on("click", "#quickViewModal .plus-btn", function () {
    if (!isNaN(currentVal)) {
      quantityInput.val(currentVal += 1);
      $("#quickViewModal .minus-btn").prop("disabled", false);
      $("#quickViewModal .minus-btn").css("cursor", "pointer");
    }

    if(currentVal === 100){
      $(this).prop("disabled", true);
      $(this).css("cursor", "default");
    }else{
      $(this).prop("disabled", false);
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
    margin: 20,
    nav: true,
    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
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
    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
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

  // ======= Login Validation ======= //
  $(function () {
    // rules 
    $("#login-submit").validate({
      rules: {
        loginEmail: {
          required: true,
          minlength: 12,
          email: true
        },
        loginPassword: {
          required: true,
          minlength: 8,
        }
      },

      // in the case of an error
      highlight: function (element) {
        $(element).css("border", "2px solid red");
      },

      // when there is no error
      unhighlight: function (element) {
        $(element).css("border", "2px solid green");
      }
    });
  });

  // ======= Subscribe Validation ======= //
  $(function () {
    // rules 
    $("#subscribe-form").validate({
      rules: {
        subscribeEmail: {
          required: true,
          minlength: 12,
          email: true
        }
      }
    });
  });
});