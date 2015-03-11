(function ($) {
  
  //slider functionality
  Drupal.behaviors.sliderListing = {
    attach: function(context, settings) {
      $(document).ready(function(){
        var pathname   = window.location.pathname.split('/'),
            flag       = false,
            indexs     = '',
            $_selector =  $('.navbar-inverse .navbar-nav > li > a');
        
        //Get index of page when refresh to start slider from that index.
        $_selector.each(function (){
          if( pathname[1] === $(this).text()){
            indexs = $(this).parent().index();
          }
        });
        
        //Adding flexslider to conatiner
        $('.customSliders').flexslider({
          animation: "fade",
          slideshow: false,
          animationLoop: true,
          startAt: indexs,
          animationSpeed: 0,
          
          //Animation to current slide and dealys to current slide
          before : function(slider){
           $('ul.slides li:eq('+slider.currentSlide+') div.views-row').each(function(i){     // Select the next slide :eq(' + slider.animatingTo + ')
                var div = $(this);
                setTimeout(function(){
                  div.animate({left: "-150%"}, {duration: 1000, easing: 'easeInExpo', queue: false});
                },i*300); 
            });
           
           $('ul.slides li:eq('+slider.animatingTo+') div.views-row').css('left','150%');
           slider.slides.eq(slider.currentSlide).delay(1500);
           slider.slides.eq(slider.animatingTo).delay(1000);
          },
          
          //main navigation active state
          after: function (slider){
            $('ul.slides li div.views-row').each(function(i){     // Select the next slide :eq(' + slider.animatingTo + ')
                var div = $(this);
                  setTimeout(function(){
                  div.animate({left: "0px"}, {duration: 500, easing: 'easeInExpo', queue: false});
                },i*200); 
            }); 
            var current_slide =  slider.currentSlide,
                href          =  $('.navbar-inverse .navbar-nav  li:eq('+ current_slide+') a').attr("href").split('/');
         
            //Change windows main url without reloading.
            if(history.pushState) {
              history.pushState({"id":100}, href[1], href[1]);
            }
            $_selector.removeClass('active-trail active');
            $_selector.parent().removeClass('active-trail active');
            $('.navbar-inverse .navbar-nav  li:eq('+ current_slide+')  a').addClass('active-trail active');
            $('.navbar-inverse .navbar-nav  li:eq('+ current_slide+')').addClass('active-trail active');
          }
        });
        
        //Get number of slides
        var  countList = $('.customSliders .slides li').size(),
             num;
        for (var i = 0; i < countList; i++) {
          $_selector.eq(i).attr('data-no', i);
        }
        
        //Navigation click to changes slides as per click
        $_selector.click( function(e){
          if($('body').hasClass('not-front') && !$('body').hasClass('page-node') && !$('body').hasClass('page-admin')){
            e.preventDefault();
            var el   = $('.customSliders .flex-control-nav li a'),
                num  = parseInt($(this).attr('data-no'), 10);
                ++num;
  
            //trigger click function on nav control
            el.removeClass('flex-active');
            el.each(function(i){
              var values = parseInt($(this).text(),10);
              if(num === values){
                $(this).click();
                $(this).addClass('flex-active');
              }
            });
          }
        });
      });
    }
  };
})(jQuery);