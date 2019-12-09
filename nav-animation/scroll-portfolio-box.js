$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('.button').hide();
    }
    else {
        $('.button').show();
    }
});