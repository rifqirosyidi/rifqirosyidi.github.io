  // niceScroll
  $("html").niceScroll();

  // Animate Each Letter
  var letters = $('.animate-name').text();
  var nHTML = '';
  for (var letter of letters) {
    if (letter == " ") {
      letter = "&#160";
    }
    nHTML += "<span class='char'>" + letter + "</span>";
  }
  $('.animate-name').html(nHTML);


    
  // Stick menu
  $(".menu").sticky({topSpacing:0});

  // Menu Scroll to content and Active menu
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+145,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");
			

	$('html, body').stop().animate({ scrollTop: $(target).offset().top }, 1000, function() {

	});
			
	return false;
   });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
  });  
  

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );

}
else 
{

  // FadeTo elements
  if ( $(window).width() > 1023) {  

    tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

    $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height();
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(1000,1);
      });
    });

  }

}


  // Neon button hovered
  $(".neon-button").hover(
    function() {
      $(".hovered-effect").addClass("apply-text-shadow");
      $("hr.box-hovered-effect").addClass("apply-box-shadow");
      $(".image-effect").addClass("image-shadow");
    },
    function() {
      $(".hovered-effect").removeClass("apply-text-shadow");
      $("hr.box-hovered-effect").removeClass("apply-box-shadow");
      $(".image-effect").removeClass("image-shadow");
    }
  )

  // Char 

  $(".char").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("animated")  
  })

  $(".char").hover(
    function() {
      $(this).addClass("animated");
    }
  )



  //Menu mobile click
  $( ".icon" ).click(function() {
    $( " ul.menu-click" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });


$(window).load(function(){

$(".preloader").delay(1000).fadeOut("slow")

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
  
  // Parallax
  if ($('.parallax-background-partners').length) {
    $(".parallax-background-partners").parallax();
  }  

});
