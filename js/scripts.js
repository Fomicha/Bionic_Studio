// Slider
$(document).ready(function(){
   $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      speed: 500,
      autoplay: true,
      responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 770,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
       // {
       //   breakpoint: 600,
       //   settings: {
       //     slidesToShow: 2,
       //     slidesToScroll: 2
       //   }
       // },
       {
         breakpoint: 370,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
        ]
    });
});

// Scroll
$(document).ready(function(){
var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;

$(function(){
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e) {
        if($('body').scrollTop() + 50 > $('#anchor5').offset().top) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();   
});
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 40){  
        $('nav').addClass("scroller");
    }
    else {
        $('nav').removeClass("scroller");
    }
});

// fade
jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
    });
});

// Плавный переход якорей
$(document).ready(function(){
    $("#header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
