jQuery(function () {
    jQuery(".header_hamburger").click(function () {
        $(this).toggleClass('active');
    });
});

$('.header_hamburger').click(function () {
    $('.tb').toggleClass('open');
    $(this).toggleClass('on');
    $(this).toggleClass('move-1');
});
