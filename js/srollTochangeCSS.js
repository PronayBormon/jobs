$(function () {
    var header = $(".before_scroll");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            header.removeClass('before_scroll')
                    .addClass("after_scroll");
        } else {
            header.removeClass("after_scroll")
                    .addClass('before_scroll');
        }
    });
});