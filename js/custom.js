$('#banner ul').slick({
	dots: true,
	speed: 300,
	infinite: false,
	slidesToShow: 1,
	autoplay: true,
	arrows: false,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
	]
});