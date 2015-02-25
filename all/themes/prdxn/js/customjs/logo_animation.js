(function ($) {
  //Srcollebale logo
  Drupal.behaviors.flexsliderCustomSettings = {
    attach: function(context, settings) {
      $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
          $('body').addClass('condensed');
        } else {
          $('body').removeClass('condensed');
        }
      });
    }
  };
})(jQuery);