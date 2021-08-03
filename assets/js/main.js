// ======= Reload ======= //
window.addEventListener("load", function () {
  let preload = document.querySelector(".loader-wrapper");
  preload.classList.add("loader-finish");
});

$(document).ready(function () {
  // ======= Dropdown actions ======= //
  $(".header-top .dropdown-top").click(function () {
    $(this).next().toggleClass("show-dropdown");
    $(this).children(".flaticon-down-arrow").toggleClass("rotate-arrow");

    $(document).on("click", ".dropdownn ul li", function () {
      $(this).parent().prev().children(".wrapper").html($(this).html());
      $(this).parent().prev().children("i").removeClass("rotate-arrow");
      $(this).parent().removeClass("show-dropdown");
    });
  });

  $(".categories-top-content").click(function () {
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
  $("header .has-submenu").mouseover(function () {
    $(".dark-bg-color").show();
    $(".dark-bg-color").css("z-index", "99");
  });

  $("header .has-submenu").mouseout(function () {
    $(".dark-bg-color").hide();
    $(".dark-bg-color").css("z-index", "9999");
  });

  // ======= Show or hide sidebar nav-menu ======= //
  $("#navigation-list .nav-menu-btn").click(function () {
    $(".header-bottom .nav-links").addClass("show-sidebar-menu");
  });

  $(".nav-menu-header button").click(function () {
    $(".header-bottom .nav-links").removeClass("show-sidebar-menu");
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (!$(".header-bottom .nav-links").is(e.target) &&
      $(".header-bottom .nav-links").has(e.target).length === 0) {
      $(".header-bottom .nav-links").removeClass("show-sidebar-menu");
    }
  });

  // ======= Show or hide Search ======= //
  $("#navigation-list .show-search-btn").click(function () {
    $(".header-middle .search").addClass("show-search");
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (!$(".header-middle .search form").is(e.target) &&
      $(".header-middle .search form").has(e.target).length === 0) {
      $(".header-middle .search").removeClass("show-search");
    }
  });

  // ======= Show or hide sidebar categories ======= //
  $("#navigation-list .sidebar-categories-btn").click(function () {
    $(".header-bottom .categories-dropdown").addClass("show-sidebar-menu");
  });

  $(".categories-header button").click(function () {
    $(".header-bottom .categories-dropdown").removeClass("show-sidebar-menu");
  });

  // processes when click outside
  $(document).mouseup(function (e) {
    if (!$(".header-bottom .categories-dropdown").is(e.target) &&
      $(".header-bottom .categories-dropdown").has(e.target).length === 0) {
      $(".header-bottom .categories-dropdown").removeClass("show-sidebar-menu");
    }
  });

  // ======= Categories - actions ======= //
  if ($(window).width() < 992) {
    $(".header-bottom .has-submenu").click(function () {
      $(".header-bottom .categories-ul").removeClass("back-1").addClass("forward-1");
      $(".header-bottom .categories-ul").prev(".categories-header").removeClass("back-1").addClass("forward-1");
      $(this).find(".submenu").addClass("show-submenu");
    });

    $(".has-submenu .submenu-btn").click(function (e) {
      e.stopPropagation()
      $(".header-bottom .categories-ul").removeClass("forward-1 back-2 back-1").addClass("forward-2");
      $(".header-bottom .categories-ul").prev(".categories-header").removeClass("forward-1 back-2 back-1").addClass("forward-2");
      $(this).next(".wrapper").show();
      $(this).next(".wrapper").first("button").removeClass("d-none");
    });

    $(".header-bottom .back-btn-1").click(function (e) {
      e.stopPropagation()
      $(".header-bottom .categories-ul").removeClass("forward-1 back-2").addClass("back-1");
      $(".header-bottom .categories-ul").siblings(".categories-header").removeClass("forward-1 back-2").addClass("back-1");
      $(this).parent(".submenu").removeClass("show-submenu");
      $(this).closest(".has-submenu").siblings(".has-submenu").find(".submenu").addClass("show-submenu");
    });

    $(".header-bottom .back-btn-2").click(function (e) {
      e.stopPropagation()
      $(".header-bottom .categories-ul").removeClass("forward-2").addClass("back-2");
      $(".header-bottom .categories-ul").siblings(".categories-header").removeClass("forward-2").addClass("back-2");
      $(this).parent(".wrapper").hide();
    });
  };

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
  $("#quickViewModal .minus-btn").click(function () {
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
  $("#quickViewModal .plus-btn").click(function () {
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
  $("#best-seller .product-action-btn").click(function () {
    $(this).toggleClass("clicked-actions-btn");
  });

  // wishlist btn
  $("#best-seller .wishlist-btn").click(function () {
    if ($(this).hasClass("clicked-actions-btn")) {
      $(this).next().text("Remove From Wishlist");
    } else {
      $(this).next().text("Add To Wishlist");
    }
  });

  // compare btn
  $("#best-seller .compare-btn").click(function () {
    if ($(this).hasClass("clicked-actions-btn")) {
      $(this).next().text("Remove From Compare");
    } else {
      $(this).next().text("Add To Compare");
    }
  });


  // =========== SHOPPING CART =========== //
  let cartBody = document.querySelector("#sidebar-cart .cart-body");

  createProduct();

  $(".add-to-cart-btn button").click(function () {
    let id = $(this).closest(".item").attr("data-id");
    let title = $(this).closest(".add-to-cart-btn").siblings(".title").children("a").text();
    let price = parseFloat($(this).closest(".add-to-cart-btn").siblings(".price").children("p").text());
    let image = $(this).closest(".item-bottom").prev().children(".img1").children().attr("src");

    let cart = JSON.parse(localStorage.getItem("product"));
    let existProduct = cart.find(p => p.id == id);

    if (existProduct === undefined && cart.length != 100) {
      cart.push({
        id: id,
        img: image,
        title: title,
        price: price,
        count: 1
      })
    } else {
      if (existProduct) existProduct.count += 1;
    }

    if (existProduct === undefined && cart.length >= 100) {
      // warning growl notification
      $.toast({
        heading: 'Warning',
        text: 'Cart is FULL!',
        icon: 'warning'
      });
    } else {
      // success growl notification
      $.toast({
        heading: 'Success',
        text: 'Product added to the CART.',
        icon: 'success'
      });
    }

    localStorage.setItem("product", JSON.stringify(cart));

    createProduct();
    getCartTotal();
    getProductCount();
  });

  // getting product count
  function getProductCount() {
    let cart = JSON.parse(localStorage.getItem("product"));
    let cartFooter = document.querySelector("#sidebar-cart .cart-footer");
    let noProduct = document.querySelector("#sidebar-cart .no-product-wrapper");

    $("header .cart-sup").text(cart.length);
    $("#sidebar-cart .cart-header .product-count").text(cart.length);

    if ($(cart).length > 0) {
      cartBody.classList.remove("d-none");
      cartFooter.classList.remove("d-none");
      noProduct.classList.add("d-none");
    } else {
      cartBody.classList.add("d-none");
      cartFooter.classList.add("d-none");
      noProduct.classList.remove("d-none");
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
            <button data-target-id=${item.id} class="remove-product" type="button">✕</button>
          </div>
        </div>`
    });

    cartBody.innerHTML = newProductItem;
  };

  // removing product
  $("#sidebar-cart .cart-body").click(function (e) {
    if (e.target.dataset.targetId) {
      let id = e.target.dataset.targetId;
      let cart = JSON.parse(localStorage.getItem("product"));

      cart.splice(id, 1);

      localStorage.setItem("product", JSON.stringify(cart));

      getProductCount();
      getCartTotal();
      createProduct();

      // error growl notification
      $.toast({
        heading: 'Removed',
        text: 'Product removed from the cart.',
      });
    }
  });

  // ======= ADD TO CART (QUICK VIEW PRODUCT) ======= //
  $(".add-to-cart #quantity-input-form").submit(function (e) {
    e.preventDefault();
    let id = $(this).closest(".item").attr("data-id");
    let title = $(this).closest(".add-to-cart").siblings(".primary-info").children(".title").text();
    let price = parseFloat($(this).closest(".add-to-cart").siblings(".primary-info").children(".price").find("p").text());
    let image = $(this).closest(".modal-body").find(".first-img").children("img").attr("src");
    let quantityInputVal = parseInt($('#quickViewModal input[type="text"]').val());

    let cart = JSON.parse(localStorage.getItem("product"));
    let existProduct = cart.find(p => p.id == id);

    if (existProduct === undefined && cart.length != 100) {
      cart.push({
        id: id,
        img: image,
        title: title,
        price: price,
        count: quantityInputVal
      })
    } else {
      if (existProduct) existProduct.count += quantityInputVal;
    }

    if (existProduct === undefined && cart.length >= 100) {
      // warning growl notification
      $.toast({
        heading: 'Warning',
        text: 'Cart is FULL!',
        icon: 'warning'
      });
    } else {
      // success growl notification
      $.toast({
        heading: 'Success',
        text: 'Product added to the CART.',
        icon: 'success'
      });
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
  $("header .cart-btn").click(function (e) {
    e.preventDefault();
    $(".dark-bg-color").show();
    $("#sidebar-cart").addClass("show-sidebarCart");
    $('body,html').css('overflow', 'hidden');
  });

  $("#sidebar-cart .close-btn").click(function () {
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
      575: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      }
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
      375: {
        items: 2,
      },
      575: {
        items: 3,
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