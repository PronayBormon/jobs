$(function () {
    var header = $(".before_scroll");
    var cat_div = $(".category_bar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            header.removeClass('before_scroll')
                    .addClass("after_scroll");
            cat_div.css({"background":"#fff","box-shadow":" 0px 0px 25px #3898e24d"});
        } else {
            header.removeClass("after_scroll")
                    .addClass('before_scroll');
            cat_div.css({"background":"transparent","box-shadow":" none"});
        }
    });
});