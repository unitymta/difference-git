$('#banner ul').slick({
	dots: true,
	speed: 300,
	infinite: false,
	slidesToShow: 1,
	// autoplay: true,
	arrows: false,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 641,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
	]
});

$('#btn-menu-mobile').click(function(){
	$(this).toggleClass('active');
	$('#header-container .container').toggleClass('active');
	$('.main-menu').toggleClass('active');
});


/* check mobile device */
$(document).ready(function(){
	$(window).resize(function(){
	    var width = $(window).width();

	    if (width <= 1199){
	    	$('body').addClass('responsive_1199');
	    }
	    else{
	    	$('body').removeClass('responsive_1199');
	    }
	    if (width <= 1250){
	    	$('body').addClass('responsive_1250');
	    }
	    else{
	    	$('body').removeClass('responsive_1250');
	    }
	    if (width <= 991){
	    	$('body').addClass('responsive_991');
	    }
	    else{
	    	$('body').removeClass('responsive_991');
	    }
	    if (width <= 767){
	        $('body').addClass('responsive_767');
	    }
	    else{
	        $('body').removeClass('responsive_767');
	    }
	    if (width <= 640){
	        $('body').addClass('responsive_640');
	    }
	    else{
	        $('body').removeClass('responsive_640');
	    }
	});
});


/* go to top */
document.getElementById('go-to-top').addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});



