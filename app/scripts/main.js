

$(document).ready(function(){





    $('.owl-carousel').owlCarousel({
        items: 1,
        // dots: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        navSpeed: 1000,
        loop: false,
        // autoplay: true,
        // autoplayTimeout: 6000,
        // smartSpeed: 1300
    });

    $(".header-middle h1, .header-middle h4").addClass('animated fadeInLeft');





     $('section .title h2').waypoint(function () {
         $("section .title h2, section .title p").addClass('animated fadeInRight', "slow");
         $(".feature-left-item p, .feature-right-item p, .integration li svg, .feature-left-item, .feature-right-item")
             .addClass('animated zoomIn');

     },{
         offset: "100%"
     }
    );





    $(".owl-prev").on("click",()=>{
        $(".comment, .photo").addClass('animated fadeInRight', "slow");
    });


    $(".owl-next").on("click",()=>{
        $(".comment, .photo").addClass('animated fadeInLeft', "slow");
    });



    let scroll = new SmoothScroll('a[href*="#section-"]',{
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 70
    });










});








