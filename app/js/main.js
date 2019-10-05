$( document ).ready(function() {
    $('.burger').click(function () {
		$('.menu').addClass('active-menu');
    });
    
    $('.close_menu').click(function () {
		$('.menu').removeClass('active-menu');
    });


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    })

});