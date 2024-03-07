'use strict';

  // =========================================================================
  // Smooth scrolling 
  // Note: requires Easing plugin - http://gsgd.co.uk/sandbox/jquery/easing/
  // =========================================================================

   $('.sm-scroll').on("click",function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top +1
            }, 1000, 'easeInOutExpo');
            return false;
         }
      }
   });



   // =========================================================================
   // Menu
   // =========================================================================

   $('#menu-trigger').on("click",function() {
      $('body').toggleClass('menu-open');

      // trigger animate
      $("#menu-trigger .str-1").toggleClass("top-animate");
      $("#menu-trigger .str-2").toggleClass("mid-animate");
      $("#menu-trigger .str-3").toggleClass("bottom-animate");

      return false;
   });


   // sub menu (on hover)
   // ====================
   $('#menu .sub-menu-trigger').on('mouseenter', function(){
      $(this).next('.sub-menu').stop(true).delay(300).slideDown(300);
      $(this).addClass('active');
   });
   $('#menu .has-children').on('mouseleave', function(){
      $('.sub-menu').stop(true).delay(300).slideUp(300);
      $('.sub-menu-trigger').removeClass('active');
   });


   // sub menu (on click)
   // ====================
   // $('#menu .sub-menu-trigger').on('click', function(){
   //    //slide up all the link lists
   //    $("#menu .sub-menu").slideUp(350);
   //    //slide down the link list below the h3 clicked - only if its closed
   //    if(!$(this).next().is(":visible")){
   //       $(this).next().slideDown(350);
   //    }
   //    return false;
   // })

   // close sub menu on mouse leave
   // $('#menu .menu-list').on('mouseleave', function(){
   //    $('.sub-menu').stop(true).delay(600).slideUp(350);
   // });


   // close menu on outside click
   // ============================
   $(document).on("click",function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("menu")) {
         // close menu
         $(".menu-open #menu-trigger").click();
      }
   });



   // =======================================================================================
   // Defer videos (Youtube, Vimeo)
   // Note: When you have embed videos in your webpages it causes your page to load slower.
   // Deffering will allow your page to load quickly.
   // Source: https://www.feedthebot.com/pagespeed/defer-videos.html
   // =======================================================================================

   function init() {
   var vidDefer = document.getElementsByTagName('iframe');
   for (var i=0; i<vidDefer.length; i++) {
   if(vidDefer[i].getAttribute('data-src')) {
   vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
   } } }
   window.onload = init;



   // ========================
   // Element parallax effect
   // ========================

   $(window).scroll(function(){
      var bgScroll = $(this).scrollTop();
      if ( $(window).width() > 992) { // disable parallax on small devices.
         // $('.parallax').css('background-position','center -'+ ((bgScroll*0.1)) +'px');
         // $('.parallax').css('top', ''+ ((bgScroll*0.9)) +'px');
         $('.parallax').css('transform', 'translate3d(0, '+ ((bgScroll * 0.4)) +'px, 0)');
      }
   });



   // =============================================
   // If browser is IE (uncomment if needed)
   // Source: http://stackoverflow.com/a/22551342
   // =============================================

   // var ms_ie = false;
   // var ua = window.navigator.userAgent;
   // var old_ie = ua.indexOf('MSIE ');
   // var new_ie = ua.indexOf('Trident/');

   // if ((old_ie > -1) || (new_ie > -1)) {
   //   ms_ie = true;
   // }

   // if ( ms_ie ) {

   //    // Begin IE specific code
   //    // =======================

   //       // Add class "ie" in body tag
   //       $('body').addClass('ie');

   //    // End IE specific code

   // }



   // ==================================
   // Fade out element with page scroll
   // ==================================

   $(window).scroll(function(){
      $(".fade-out-scroll-1").css("opacity", 1 - $(window).scrollTop() / 250);
      $(".fade-out-scroll-2").css("opacity", 1 - $(window).scrollTop() / 350);
      $(".fade-out-scroll-3").css("opacity", 1 - $(window).scrollTop() / 450);
      $(".fade-out-scroll-4").css("opacity", 1 - $(window).scrollTop() / 550);
      $(".fade-out-scroll-5").css("opacity", 1 - $(window).scrollTop() / 650);
      $(".fade-out-scroll-6").css("opacity", 1 - $(window).scrollTop() / 750);
   });



   // ===================================================================================
   // Isotope
   // Source: http://isotope.metafizzy.co
   // Note: "imagesloaded" blugin is required: https://github.com/desandro/imagesloaded
   // ===================================================================================

   // init Isotope
   var $container = $('.isotope-items-wrap');
   $container.imagesLoaded(function() {
      $container.isotope({
         itemSelector: '.isotope-item',
         transitionDuration: '0.5s',
         masonry: {
            columnWidth: '.grid-sizer',
            horizontalOrder: false
         }
      });
   });

   // Filter
   $('.isotope-filter-links a').on("click",function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({
         filter: selector
      });
      return false;
   });

   // Filter item active
   var filterItemActive = $('.isotope-filter-links a');
   filterItemActive.on('click', function(){
      var $this = $(this);
      if ( !$this.hasClass('active')) {
         filterItemActive.removeClass('active');
         $this.addClass('active');
      }
   });



   // =====================================================
   // OWL Carousel
   // Source: https://owlcarousel2.github.io/OwlCarousel2/
   // =====================================================

   $('.owl-carousel').each(function(){
      var $carousel = $(this);
      $carousel.owlCarousel({

         items: $carousel.data("items"),
         loop: $carousel.data("loop"),
         margin: $carousel.data("margin"),
         center: $carousel.data("center"),
         startPosition: $carousel.data("start-position"),
         animateIn: $carousel.data("animate-in"),
         animateOut: $carousel.data("animate-out"),
         autoWidth: $carousel.data("autowidth"),
         autoHeight: $carousel.data("autoheight"),
         autoplay: $carousel.data("autoplay"),
         autoplayTimeout: $carousel.data("autoplay-timeout"),
         autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
         autoplaySpeed: $carousel.data("autoplay-speed"),
         nav: $carousel.data("nav"),
         navText: ['', ''],
         navSpeed: $carousel.data("nav-speed"),
         dots: $carousel.data("dots"),
         dotsSpeed: $carousel.data("dots-speed"),
         mouseDrag: $carousel.data("mouse-drag"),
         touchDrag: $carousel.data("touch-drag"),
         dragEndSpeed: $carousel.data("drag-end-speed"),
         lazyLoad: $carousel.data("lazy-load"),
         video: true,
         responsive: {
            0: {
               items: $carousel.data("mobile-portrait"),
               center: false,
            },
            480: {
               items: $carousel.data("mobile-landscape"),
               center: false,
            },
            768: {
               items: $carousel.data("tablet-portrait"),
               center: false,
            },
            992: {
               items: $carousel.data("tablet-landscape"),
            },
            1200: {
               items: $carousel.data("items"),
            }
         }

      });

      // Mousewheel plugin
      var owl = $('.owl-mousewheel');
      owl.on('mousewheel', '.owl-stage', function (e) {
         if (e.deltaY>0) {
            owl.trigger('prev.owl');
         } else {
            owl.trigger('next.owl');
         }
         e.preventDefault();
      });
   });



   // ======================================================
   // Magnific Popup
   // Source: http://dimsemenov.com/plugins/magnific-popup/
   // ======================================================

   // Image gallery popup (type image)
   $('.popup-gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
         delegate: '.popup-trigger',
         type: 'image',
         tLoading: 'Loading image #%curr%...',
         mainClass: 'mfp-fadein',
         gallery: {
            enabled: true, // enable or disable gallery (false/true)
            preload: [0,1], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
         },
         image: {
            titleSrc: 'data-title', // Attribute of the target element that contains caption for the slide.
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' // Error message
         }
      });
   });



   // =======================================================
   // YTPlayer (Background Youtube video)
   // Source: https://github.com/pupunzi/jquery.mb.YTPlayer
   // =======================================================

   $(".youtube-bg").mb_YTPlayer();



   // ==============================================================================
   // Add to favorite button
   // Source: http://www.webdesigncrowd.com/demo/circle-reveal-animation-12.23.13/
   // ==============================================================================

   $(".fav-count").on("click",function() {
      var total = parseInt($(this).html(), 10);
      if ($(this).parent().hasClass("active")) {
         total -= 1;
      } else {
         total += 1;
      }
      $(this).html(total);
      $(this).parent().toggleClass("active");
   });

   $(".icon-heart").on("click",function() {
      var total = parseInt($(this).parent().siblings(".fav-count").first().html(), 10);
      if ($(this).parent().parent().hasClass("active")) {
         total -= 1;
      } else {
         total += 1;
      }
      $(this).parent().siblings(".fav-count").first().html(total);
      $(this).parent().parent().toggleClass("active");
   });



   // =========================================================================
   // Global search
   // =========================================================================

   $('#global-search-trigger').on("click",function() {
      $('body').toggleClass('global-search-open');

      return false;
   });

   // close button
   $('.global-search-close').on("click",function() {
      $(".global-search-open #global-search-trigger").click();
      return false;
   });

   // close global search on outside click
   $(document).on("click",function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("gl-s")) {
         // close global search
         $(".global-search-open #global-search-trigger").click();
      }
   });

   // close global search on link click
   $('#menu-trigger, #global-search .tab-content a, #global-search .isotope-filter a').on("click",function() {
      $(".global-search-open #global-search-trigger").click();
   });



   // =========================================================================
   // Top filter
   // =========================================================================

   $('#top-filter-trigger').on("click",function() {
      $('body').toggleClass('top-filter-open');

      return false;
   });

   // close button
   $('.top-filter-close').on("click",function() {
      $(".top-filter-open #top-filter-trigger").click();
      return false;
   });

   // close top filter on outside click
   $(document).on("click",function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("top-f")) {
         // close top filter
         $(".top-filter-open #top-filter-trigger").click();
      }
   });

   // close top filter on link click
   $('.isotope-filter a').on("click",function() {
      $(".top-filter-open #top-filter-trigger").click();
   });



   // ===============================================
   // Universal PHP Mail Feedback Script
   // Source: https://github.com/agragregra/uniMail
   // ===============================================

   // E-mail Ajax Send
   $("#contact-form").submit(function() { // Change (your contact form ID)
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", // Change (mail.php path)
         data: th.serialize()
      }).done(function() {
         alert("Thank you. Your message has been sent!");
         setTimeout(function() {
         // Done Functions
         th.trigger("reset");
         }, 1000);
      });
      return false;
   });



   // ==============================
   // Portfolio single info toggle
   // ==============================

   $('.psi-toggle-trigger').on("click",function() {
      $('.psi-toggle').toggleClass('psi-toggle-full');
      $('.psi-toggle-hidden').slideToggle( 400 );
   });



   // ===========================================
   // Price range slider
   // Source: http://jqueryui.com/slider/#range
   // ===========================================

   $("#price-range-slider").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 0, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
   });
   $("#amount").val( "$" + $("#price-range-slider").slider("values", 0 ) + " - $" + $( "#price-range-slider" ).slider( "values", 1 ));



   // =============================
   // Remove placeholder on focus
   // =============================

   $('input,textarea').focus(function () {
      $(this).data('placeholder', $(this).attr('placeholder'))
         .attr('placeholder', '');
   }).blur(function () {
      $(this).attr('placeholder', $(this).data('placeholder'));
   });



   // ==================================================
   // Shop single product quantity (plus/minus buttons)
   // ==================================================
   
   $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
         // Don't allow decrementing below 1
         if (oldValue > 1) {
         var newVal = parseFloat(oldValue) - 1;
         } else {
            newVal = 1;
         }
      }
      $button.parent().find("input").val(newVal);
   });



   // ====================
   // Shop product filter 
   // ====================

   $('#shop-filter-trigger').on("click",function() {
      $('body').toggleClass('shop-filter-open');
      return false;
   });

   // close button
   $('.shop-filter-close').on("click",function() {
      $(".shop-filter-open #shop-filter-trigger").click();
      return false;
   });

   // close filter on outside click
   $(document).on("click",function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("s-filter")) {
         // close filter
         $(".shop-filter-open #shop-filter-trigger").click();
      }
   });



   // ===============
   // Window resize 
   // ===============

   $(window).resize(function() {

      // Element percent heights (% of window heigth)
      $('[data-percent-height]').each(function(){ 
         var percent_height = $(this).attr('data-percent-height');
         $(this).innerHeight($(window).height() * percent_height );
      });

      // Make "#content-container" margin-bottom equal to ".fixed-footer" height
      $('#content-container').css('margin-bottom', $('.fixed-footer').css('height'));

   }).resize();



   // ===============
   // Miscellaneous
   // ===============

   // Bootstrap-3 modal fix
   $('.modal').appendTo("body")

   // Bootstrap tooltip
   $('[data-toggle="tooltip"]').tooltip()

   // Bootstrap popover
   $('[data-toggle="popover"]').popover({
      html: true
   });

   // Hover fix for iOS
   $('*').on('touchstart',function() {
      $(this).trigger('hover') ;
   }).on('touchend',function() {
      $(this).trigger('hover') ;
   });
