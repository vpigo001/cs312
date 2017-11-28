//change navbar color on scroll
$(function () {
    $(document).scroll(function () {
        var nav = $("nav ul");
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });
});