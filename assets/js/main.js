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

    // ======= Owl-Carousel ======= //
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        items: 1
    });
});