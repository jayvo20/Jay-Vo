var scrollToTop = function () {
    var scrollProgress = $(document).scrollTop();
    
    if (scrollProgress > 100) {
      $('.scroll-to-top-button').css("opacity", "1");
    } else {
      $('.scroll-to-top-button').css("opacity", "0");    
    }
  } 
  
  $('.scroll-to-top-button').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
  
  scrollToTop();
  $(document).scroll(scrollToTop);