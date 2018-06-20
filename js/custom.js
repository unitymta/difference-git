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