function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
$(function(){
	let header = $('#header'),
		introH = $('#intro').innerHeight(), 
		scrolloffset = $(window).scrollTop(); // Текущий скрол страницы
		

	/* Fixed Header*/
	checkScroll(scrolloffset);


	$(window).on("scroll", function(){
		scrolloffset = $(this).scrollTop();
		// console.log(scrolloffset); 
		checkScroll(scrolloffset);
	});
	/*  */
	function checkScroll(scrolloffset){
		if (scrolloffset >= introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	/* Smooth scroll */
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		let $this = $(this),
		 	blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top - $(header).innerHeight(); //убираем отступы
			// console.log(blockOffset);

		$('#nav a').removeClass('active');
		$this.addClass('active');

		// Hiding burger menu 
		if ($("#nav_toggle").hasClass('active')) {
			$(window).on("scroll", function() {
				$("#nav").removeClass("active");
				$("#nav_toggle").removeClass("active");
			});
		}

		$('.section__title').removeClass('bg-highlight');
  		$(blockId + ' .section__title').addClass('bg-highlight');

  		$('html, body').animate({
			scrollTop: blockOffset
		}, 500);
	});

	/* Menu nav Toggle */
	$('#nav_toggle').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});

	/* Collapse */
	$('#wedo_1').slideToggle('slow');
	$('.accordion__header--slow').addClass('active');
	$('[data-collapse]').on('click', function(event) {
		event.preventDefault();
		let $this = $(this),
			blockId = $this.data('collapse');

		$(this).toggleClass('active');

		$(blockId).slideToggle();


	});

	/* Slider */
	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
  		slidesToScroll: 1
	});

});
