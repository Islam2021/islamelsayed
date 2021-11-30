$(document).ready(function() {
    $(".progress .progress-bar").each(function() {
        $(this).animate({ width: $(this).attr("aria-valuenow") }, 50);
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        lazyLoad: true,
        animateIn: true,
        animateOut: true,
        animateIn: true,
        mergeFit: true,
        smartSpeed: 950,
        autoplayHoverPause: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1360: {
                items: 4
            }
        }
    })
});