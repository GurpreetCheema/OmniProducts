$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });
})


$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
    });



    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }

        else {
            body.css("padding-top", 0);
            body.navClass("fixedNav");
        }




    }





    document.getElementById("date").innerHTML = Date();




});
