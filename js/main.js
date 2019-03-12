(function($){
  $(document).ready(function(){
    
    
    //BANNER IMAGE SCALING
    var bannerWidth  = 1440;

    bannerScale();
    $(window).resize(function(){
      bannerScale();
    });
    
    function bannerScale(){
      var containerWidth  = $("div.slider").width();
      var scaleDown;
      scaleDown = Math.min(containerWidth/bannerWidth);
      
      //TARGET LAYERS TO SCALE
      $('div.slider .slide .layers').css({'transform': 'scale(' + scaleDown + ')'});
    }

    //MOBILE MENU
    $('header .hamburger > div').on('click', function(){
      $(this).parent().toggleClass('open');
      $('body').toggleClass('open');
      $('div.mobile-menu').toggleClass('open');
    });

    //SLICK SETTINGS
    $('main div#main > div.carousel').slick({
	  infinite: false, draggable: false, slidesToShow: 4, slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1251, settings: {slidesToShow: 2, slidesToScroll: 2}
	    },
	    {
	      breakpoint: 801, settings: {slidesToShow: 1, slidesToScroll: 1}
	    }
	  ]
	});


  });
})(jQuery);