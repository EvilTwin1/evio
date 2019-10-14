$( document ).ready(function() {

    $('.burger').click(function () {
		  $('.menu').addClass('active-menu');
    });
    
    $('.close_menu').click(function () {
		  $('.menu').removeClass('active-menu');
    });


  $(' .blog').slice(0, 1).show();

  $('#loadMore').on('click', function (event) {
      event.preventDefault();

      $('.blog:hidden').slice(0, 1).slideDown();
      if ($('.blog:hidden').length === 0) {
          $('#loadMore').fadeOut();
      }
  });

    $('.test2').owlCarousel({
      loop:true,
      nav:false,
      dots:true,
      responsive:{
          320:{
              items:1
          },
          700:{
              items:2
          },
          1200:{
            items:3
        },
          1400:{
              items:4
          }
      }
    })


    $('.test').owlCarousel({
      loop:true,
      nav:false,
     
      dots:true,
      responsive:{
          320:{
              items:1
          },
          700:{
              items:2
          },
          1200:{
            items:3
        },
          1400:{
              items:3
          }
      }
    })


});