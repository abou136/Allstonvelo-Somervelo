var fixed_menu = true;
window.jQuery = window.$ = jQuery;

/* Custom Scripts */

function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   300;
	$('.navmenu').find('a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.navmenu li')
			.removeClass('active')
			.eq(i).addClass('active');
			
			$('#top .navmenu li').first().addClass('active');
			$('.mobile_menu_wrapper').css({'display' : 'none'});
			
		}
	})
};


$(document).ready(function() {		
	//Fixed Menu
	if ($('.fixed-menu').size() && fixed_menu == true) {
		$('.fixed-menu').append('<div class="fixed-menu-wrapper container">'+$('#top header .container').html()+'</div>');
		$('.fixed-menu').find('.menu').children('li').each(function(){
			$(this).children('a').append('<div class="menu_fadder"/>');
		});
		
		var fixd_menu = setInterval(scrolled_menu, 100);
	}



	//MobileMenu
	$('#top header .container').append('<a href="#home" class="mobile_logo icon-SV_outline"></a>');
	$('#top header .container').append('<a href="javascript:void(0)" class="menu_toggler"/>');
	$('#top').append('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');	
	$('.mobile_menu').html($('#top header').find('.navmenu').html());
	$('.mobile_menu_wrapper').hide();
	$('.menu_toggler').click(function(){
	  $('.mobile_menu_wrapper').slideToggle(300);
	});
	
	$('.mobile_menu a').click(function(){
	  $('.mobile_menu a').removeClass("active");
		$(this).addClass("active");
  });




	// if single_page
	if (jQuery("#page").hasClass("single_page")) {			
	}
	else {
		$(window).scroll(function(event) {
			calculateScroll();
		});
		$('.navmenu ul li a, .mobile_menu ul li a, .down_btn').click(function() {  
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 74}, 1000);
			return false;
		});
    $(".mobile_logo").click(function(){
		  $('html, body').animate({scrollTop: $(this.hash).offset().top - 74}, 1000);
		  return false;
	  });
	};

	
	
	
	//Contact form
	$('form#contact-form').submit(function() {
		$('form#contact-form .contact-error').remove();
		var hasError = false;
		$('form#contact-form .requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
         var labelText = $(this).prev('label').text();
         $(this).parent().append('<span class="contact-error">Required</span>');
         $(this).addClass('inputError');
         hasError = true;
       } 
						
        else if($(this).hasClass('email')) {
          var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
          var emailblockReg = /^\w+([\.-]?\w+)*@(?!\w+\.es)(?!\w+\.fr)(?!\w+\.in)(?!\w+\.pl)(?!\w+\.ru)(?!\w+\.ro)\w+([\.-]?\w+)*(\.\w{2,4})+$/; // (?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)

           	if(!emailReg.test(jQuery.trim($(this).val()))) {
              var labelText = $(this).prev('label').text();
           		$(this).parent().append('<span class="contact-error">Invalid</span>');
            	$(this).addClass('inputError');
            	hasError = true;
            }

						else if(!emailblockReg.test(jQuery.trim($(this).val()))) {
              var labelText = $(this).prev('label').text();
              $(this).parent().append('<span class="contact-error">No spam please.</span>');
            	$(this).addClass('inputError');
              hasError = true
					  }
         } 
						
				else if($(this).hasClass('math')) {
          var mathReg = /(1[1])/;
          if(!mathReg.test(jQuery.trim($(this).val()))) {
          	var labelText = $(this).prev('label').text();
          	$(this).parent().append('<span class="contact-error">incorrect</span>');
          	$(this).addClass('inputError');
          	hasError = true;
          }
				}
		});
		
		if(!hasError) {
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
		    $('form#contact-form .contact-error').remove();
				$("form#contact-form").before('<div class="contact-success"><strong>THANK YOU!</strong></div>');
				var form = document.getElementById("contact-form");
        form.reset();
			});
		}
		return false;
	});


	sliderHeight(); //Home Height
	$(window).stellar(); //Parallax Effect
	mymargtop(); //Welcome Block Vertical Align
});


$(window).resize(function(){
	sliderHeight(); //Home Height
	mymargtop(); //Welcome Block Vertical Align

});



function scrolled_menu() {
	var home_h = $(window).height();
	if ($(window).scrollTop() > $('#top header').height()+home_h-74) {
		$('.fixed-menu').addClass('fixed_show');
	} else {
		$('.fixed-menu').removeClass('fixed_show');
	}
};



//Home Height
function sliderHeight(){
	wh = $(window).height();
	$('#home').css({height:wh});
}



//Welcome Block Vertical Align
function mymargtop() {
	var body_h = $(window).height();
	var container_h = $('.welcome_block').height();	
	var marg_top = Math.abs((body_h - container_h)/2);	
	$('.branding').css('padding-top', marg_top);
	$('.branding').css('padding-bottom', marg_top);
}



//Bio Windows
$(function() {
  $('.jtwin, .tewin, .marswin, .andywin, .nolanwin, .addisonwin').hide();  

  $(".launch-jt").click(function () {
	  $(".jtwin").show("slide",{direction: 'left'})
  });
  $(".jtwin .closewin a").click(function () {
	  $(".jtwin").hide("slide",{direction: 'left'})
  });

  $(".launch-te").click(function () {
	  $(".tewin").show("slide",{direction: 'right'})
  });
  $(".tewin .closewin a").click(function () {
	  $(".tewin").hide("slide",{direction: 'right'})
  });

  	$(".launch-mars").click(function () {
	  $(".marswin").show("slide",{direction: 'right'})
  });
  $(".marswin .closewin a").click(function () {
	  $(".marswin").hide("slide",{direction: 'right'})
  });

  $(".launch-andy").click(function () {
	  $(".andywin").show("slide",{direction: 'right'})
  });
  $(".andywin .closewin a").click(function () {
	  $(".andywin").hide("slide",{direction: 'right'})
  });

  $(".launch-nolan").click(function () {
	  $(".nolanwin").show("slide",{direction: 'right'})
  });
  $(".nolanwin .closewin a").click(function () {
	  $(".nolanwin").hide("slide",{direction: 'right'})
  });

  $(".launch-addison").click(function () {
	  $(".addisonwin").show("slide",{direction: 'right'})
  });
  $(".addisonwin .closewin a").click(function () {
	  $(".addisonwin").hide("slide",{direction: 'right'})
  });
  
  
});
