$('#exploreBtn').click(() => {
    $('html, body').animate({
        scrollTop: $('.Projects').offset().top
    }, 200);
});