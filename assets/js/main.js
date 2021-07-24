$(document).ready(function () {
    // ======= Dropdown actions ======= //
    $(document).on("click", ".header-top .selected", function (e) {
        e.stopPropagation();

        $(this).next().toggleClass("show-dropdown");
        $(this).children("i").toggleClass("rotate-arrow");

        $(document).on("click", ".dropdownn ul li", function () {
            $(this).parent().prev().children(".wrapper").html($(this).html());
            $(this).parent().prev().children("i").removeClass("rotate-arrow");
            $(this).parent().removeClass("show-dropdown");
        });

        // processes when click outside
        $(document).mouseup(function (e) {
            if (!$(".dropdownn").is(e.target) && $(".dropdownn").has(e.target).length === 0) {
                $(".dropdownn ul").removeClass("show-dropdown");
                $(".dropdownn i").removeClass("rotate-arrow");
            }
        });
    });
});