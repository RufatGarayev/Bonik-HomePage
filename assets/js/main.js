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
    if (!$(".dropdownn").is(e.target) && $(".dropdownn").has(e.target).length === 0) {
      $(".dropdownn ul").removeClass("show-dropdown");
      $(".categories-dropdown").removeClass("show-categories-dropdown");
      $(".dropdown-top .flaticon-down-arrow").removeClass("rotate-arrow");
    }
  });

  // ======= Show or hide dark bg-color ======= //
  $(document).on("mouseover", "header .has-submenu", function () {
    $(".dark-bg-color").show();
    $(".dark-bg-color").css("z-index", "99");
  });

  $(document).on("mouseout", "header .has-submenu", function () {
    $(".dark-bg-color").hide();
    $(".dark-bg-color").css("z-index", "9999");
  });

  // ======= Show or hide sidebar nav-menu ======= //
  $(document).on("click", "#navigation-list .nav-menu-btn", function () {
    $(".header-bottom .nav-links").addClass("show-sidebar-menu");
  });

  $(document).on("click", ".nav-menu-header button", function () {
    $(".header-bottom .nav-links").removeClass("show-sidebar-menu");
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (!$(".header-bottom .nav-links").is(e.target) &&
      $(".header-bottom .nav-links").has(e.target).length === 0) {
      $(".header-bottom .nav-links").removeClass("show-sidebar-menu");
    }
  });

  // ======= Show or hide sidebar categories ======= //
  $(document).on("click", "#navigation-list .sidebar-categories-btn", function () {
    $(".header-bottom .categories-dropdown").addClass("show-sidebar-menu");
  });

  $(document).on("click", ".categories-header button", function () {
    $(".header-bottom .categories-dropdown").removeClass("show-sidebar-menu");
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (!$(".header-bottom .categories-dropdown").is(e.target) &&
      $(".header-bottom .categories-dropdown").has(e.target).length === 0) {
      $(".header-bottom .categories-dropdown").removeClass("show-sidebar-menu");
    }
  });

  // ======= Categories actions ======= //
  $(function() {
    $(document).on("click", ".header-bottom .has-submenu", function () {
      $(this).closest(".categories-ul").css("transform", "translateX(-305px)");
      $(this).closest(".categories-ul").siblings(".categories-header").css("transform", "translateX(-305px)");
    });

    $(document).on("click", ".header-bottom .has-submenu .submenu-btn", function () {
      $(this).closest("ul").addClass("forward-2");
      $(this).closest("ul").siblings(".categories-header").addClass("forward-2");
      $(this).next(".wrapper").show();
    });

    // $(document).on("click", ".header-bottom .submenu .back-btn", function () {
    //   $(this).parents(".categories-ul").css("transform", "translateX(0px)");
    //   $(this).parents(".categories-ul").siblings(".categories-header").css("transform", "translateX(0px)");
    // });
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
    if (($(window).width() > 992) && ($(this).scrollTop() >= 121)) {
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

    if (($(window).width() < 992) && ($(this).scrollTop() >= 43)) {
      $(".header-middle-wrapper").addClass("sticky");
    } else {
      $(".header-middle-wrapper").removeClass("sticky");
    }
  });

  $("#back-to-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  // ======= Increasing or decreasing the quantity input value ======= //
  let quantityInput = $('#quickViewModal input[type="text"]');
  let currentVal = parseInt($(quantityInput).val());

  // decrease action
  $(document).on("click", "#quickViewModal .minus-btn", function () {
    if (!isNaN(currentVal)) {
      quantityInput.val(currentVal -= 1);
      $("#quickViewModal .plus-btn").prop("disabled", false);
      $("#quickViewModal .plus-btn").css("cursor", "pointer");
    }

    if (currentVal === 1) {
      $(this).prop("disabled", true);
      $(this).css("cursor", "default");
    } else {
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

    if (currentVal === 10) {
      $(this).prop("disabled", true);
      $(this).css("cursor", "default");
    } else {
      $(this).prop("disabled", false);
    }
  });

  // ======= Product actions ======= //
  $(document).on("click", "#best-seller .product-action-btn", function () {
    $(this).toggleClass("clicked-actions-btn");
  });

  // wishlist btn
  $(document).on("click", "#best-seller .wishlist-btn", function () {
    if ($(this).hasClass("clicked-actions-btn")) {
      $(this).next().text("Remove From Wishlist");
    } else {
      $(this).next().text("Add To Wishlist");
    }
  });

  // compare btn
  $(document).on("click", "#best-seller .compare-btn", function () {
    if ($(this).hasClass("clicked-actions-btn")) {
      $(this).next().text("Remove From Compare");
    } else {
      $(this).next().text("Add To Compare");
    }
  });


  // ========= SHOPPING CART ========= //
  let cartBody = $("#sidebar-cart .cart-body");

  createProduct();

  $(document).on("click", ".add-to-cart-btn button", function () {
    let id = $(this).closest(".item").attr("data-id");
    let title = $(this).closest(".add-to-cart-btn").siblings(".title").children("a").text();
    let price = parseFloat($(this).closest(".add-to-cart-btn").siblings(".price").children("p").text());
    let image = $(this).closest(".item-bottom").prev().children(".img1").children().attr("src");

    let cart = JSON.parse(localStorage.getItem("product"));
    let existProduct = cart.find(p => p.id == id);

    if (existProduct === undefined) {
      cart.push({
        id: id,
        img: image,
        title: title,
        price: price,
        count: 1
      })
    } else {
      existProduct.count += 1;
    }

    localStorage.setItem("product", JSON.stringify(cart));

    getCartTotal();
    getProductCount();
    createProduct();

    // Growl Notification
    $.toast({
      heading: 'Success',
      text: 'Product added to the cart.',
      icon: 'success'
    });
  });

  // getting product count
  function getProductCount() {
    let cart = JSON.parse(localStorage.getItem("product"));

    $("header .cart-sup").text(cart.length);
    $("#sidebar-cart .cart-header .product-count").text(cart.length);

    if (cart.length > 0) {
      $("#sidebar-cart .cart-body").removeClass("d-none");
      $("#sidebar-cart .cart-footer").removeClass("d-none");
      $("#sidebar-cart .no-product-wrapper").addClass("d-none");
    } else {
      $("#sidebar-cart .cart-body").addClass("d-none");
      $("#sidebar-cart .cart-footer").addClass("d-none");
      $("#sidebar-cart .no-product-wrapper").addClass("d-flex");
    }
  };

  getProductCount();

  // getting cart total price
  function getCartTotal() {
    let cartArr = JSON.parse(localStorage.getItem("product"));
    let cartTotal = $("#sidebar-cart .cart-total");
    let productTotalPrice = 0;
    let cartTotalPrice = 0;

    cartArr.forEach(item => {
      productTotalPrice = item.count * item.price
      cartTotalPrice += productTotalPrice;
      cartTotal.text(`($${cartTotalPrice.toFixed(2)})`);
    });
  };

  getCartTotal();

  // creating product
  function createProduct() {
    if (localStorage.getItem("product") == null) {
      localStorage.setItem("product", JSON.stringify([]));
    }

    let cart = JSON.parse(localStorage.getItem("product"));
    let newProductItem = "";

    cart.forEach(item => {
      newProductItem +=
        `<div class="product-item d-flex align-items-center justify-content-between">
          <div class="product-img">
            <img src=${item.img} alt="SonyTV1080p">
          </div>
          <div class="product-info w-100">
            <a href="#">${item.title}</a>
            <p class="text-muted product-count-and-price">
              <span class="product-price">$${(item.price).toFixed(2)}</span>
              <span className="multiplication">×</span>
              <span class="product-count">${item.count}</span>
            </p>
            <p class="product-total-price">$${(item.count * item.price).toFixed(2)}</p>
          </div>
          <div class="remove-btn">
            <button onclick="removeProduct(${item.id})" type="button">✕</button>
          </div>
        </div>`
    });

    cartBody.html(newProductItem);
  };

  // removing product
  function removeProduct(id) {
    let cart = JSON.parse(localStorage.getItem("product"));

    cart.splice(id, 1);
    localStorage.setItem("product", JSON.stringify(cart));

    $.toast({
      heading: 'Error',
      text: 'Product removed from the cart.',
      icon: 'error'
    });

    getProductCount();
    getCartTotal();
    createProduct();
  };

  // ======= ADD TO CART (QUICK VIEW PRODUCT) ======= //
  $(document).on("submit", ".add-to-cart #quantity-input-form", function (e) {
    e.preventDefault();

    let id = $(this).closest(".item").attr("data-id");
    let title = $(this).closest(".add-to-cart").siblings(".primary-info").children(".title").text();
    let price = parseFloat($(this).closest(".add-to-cart").siblings(".primary-info").children(".price").find("p").text());
    let image = $(this).closest(".modal-body").find(".first-img").children("img").attr("src");
    let quantityInputVal = parseInt($('#quickViewModal input[type="text"]').val());

    let cart = JSON.parse(localStorage.getItem("product"));
    let existProduct = cart.find(p => p.id == id);

    if (existProduct === undefined) {
      cart.push({
        id: id,
        img: image,
        title: title,
        price: price,
        count: quantityInputVal
      })
    } else {
      existProduct.count += quantityInputVal;
    }

    localStorage.setItem("product", JSON.stringify(cart));

    getProductCount();
    getCartTotal();
    createProduct();
  });


  // ======= Countdown ======= //
  $(".countdown-active").countdown("2023/01/01", function (e) {
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

  // ======= Showing or hiding Sidebar cart ======= //
  $(document).on("click", "header .cart-btn", function (e) {
    e.preventDefault();
    $(".dark-bg-color").show();
    $("#sidebar-cart").addClass("show-sidebarCart");
    $('body,html').css('overflow', 'hidden');
  });

  $(document).on("click", "#sidebar-cart .close-btn", function () {
    $(".dark-bg-color").hide();
    $("#sidebar-cart").removeClass("show-sidebarCart");
    $('body,html').css('overflow', 'visible');
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (!$("#sidebar-cart").is(e.target) && $("#sidebar-cart").has(e.target).length === 0) {
      $(".dark-bg-color").hide();
      $("#sidebar-cart").removeClass("show-sidebarCart");
      $('body,html').css('overflow', 'visible');
    }
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

  // ======= Quantity input Validation ======= //
  $(function () {
    $("#quantity-input-form").validate({
      // rules
      rules: {
        quantityValue: {
          required: true,
          digits: true,
          max: 10
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
});