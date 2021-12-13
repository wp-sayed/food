

/*-----------------------------------------------------------------------------------

 Template Name:Bigdeal
 Template URI: themes.pixelstrap.com/bigdeal
 Description: This is E-commerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01. Slick slider
// 02. header js
// 03. footer js
// 04. Image to background js
// 05  toggle nav
// 06  navbar mobile nav
// 07  menu js
// 08. Product page
// 09. category page
// 10. Product page Quantity Counter
// 11. filter sidebar js
// 12. Filter js
// 13. tab js
// 14. RTL & Dark Light
// 15. Add to cart
// 16.  Add to wishlist
// 17. Tap on Top
// 18. loader
// 19. add to cart sidebar js
// 20. Color Picker
// 21. Add to cart quantity Counter

(function ($) {
    "use strict";

     
    /*=====================
       01. owl carousel
     ==========================*/
$('.slider-active').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    dots:true
});





    /*=====================
       02. counter
     ==========================*/

document.addEventListener("DOMContentLoaded",() =>{
    function counter(id,start,end,duration){
        let obj   = document.getElementById(id),
        current   = start,
        range     = end - start,
        increment = end > start ? 1 : -1 ,
        step      = Math.abs(Math.floor(duration / range)),
        timer     = setInterval(() => {
                 current         += increment;
                 obj.textContent  = current;
                 if(current == end){
                    clearInterval(timer);
                 }
        },step);
    }
    counter("count1",0,1200,3000);
    counter("count2",100,1220,3000);
    counter("count3",200,1250,3000);
    counter("count4",300,1300,3000);
});














    //sticky header active
    $(window).on('scroll',function(){
       let scroll = $(window).scrollTop();
       if(scroll < 20){
          $('.sticky-header').removeClass('sticky');
       }else{
          $('.sticky-header').addClass('sticky');
    }});

    // WOW js active
    new WOW().init();


})(jQuery);