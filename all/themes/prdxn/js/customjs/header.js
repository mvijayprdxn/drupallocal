(function ($) {
  //Srcollebale logo
  Drupal.behaviors.logoanimation = {
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
  
  //Search transition
  Drupal.behaviors.searchtransition = {
    attach: function(context, settings) {
      $('.input-group-btn').click(function(e) {
        e.preventDefault();
        var $input = $(this).siblings('input');
        if($input.hasClass('expand')){
          $input.css('width','0').removeClass('expand');
        } else {
          $input.css('width','350px').addClass('expand');
        }
        if($input.val() !== ''){
          $('#search-block-form').submit();
        }
      });
    }
  };
})(jQuery);