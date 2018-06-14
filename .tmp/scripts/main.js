"use strict";

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        // dots: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        navSpeed: 1000,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1300
    });

    $(".header-middle h1, .header-middle h4").addClass('animated fadeInLeft');
    $("section .title h2, section .title p").addClass('animated fadeInRight');
    $(".feature-left-item p, .feature-right-item p, .integration li svg").addClass('animated zoomIn');

    $("section .title p").waypoint(function () {
        console.log("asdasd");
    });
});
//# sourceMappingURL=main.js.map
