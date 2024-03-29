$(document).ready(function () {
    $("#hamburger").click(function () {
        $("#navbar").slideToggle();
    })

    const width = screen.width;
    $(window).scroll(function () {
        const height = $(window).scrollTop()
        if (width <= 768 && height >= 30) {
            $('#header').addClass('glass');
        } else if (width >= 768 && height >= 45) {
            $('#header').addClass('glass');
        } else {
            $('#header').removeClass('glass');
        }
    });
});