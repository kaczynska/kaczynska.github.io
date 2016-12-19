var carouselList;

$(function(){

	var $carouselList = $("#carousel ul"),
		$dots = $(".indicators li"),
		carouselLength = $carouselList.find('li').length,
		offset = -400,
		currentSlide = 0;

	function changeSlide() {

	if (carouselLength > 1)
		updateDots();

	$carouselList.animate({'marginLeft': currentSlide * offset}, 1000);
	}

	function updateDots() {
		$dots
			.removeClass('active')
			.eq(currentSlide)
			.addClass('active');
	}

	function next() {
		currentSlide = (currentSlide + 1)%carouselLength;
	}

	function prev() {
		currentSlide = (currentSlide - 1)%carouselLength;

		if (currentSlide < 0) {
			currentSlide = carouselLength - 1;
		}
	}

	setInterval(function(){
		next();
		changeSlide();
	}, 2000); //co 3 sek. wykona funkcję zmieniającą slajd

	//dodaj klikniecie na dotsy
	$dots.each(function(){
		$(this).on("click", function(event) {
			currentSlide = $(this).data('slide-to');
			changeSlide();
		});
	});

	//kliknięcie w lewy przycik
	$("#btn-left").on("click", function(event) {
		prev();
		changeSlide();
	});

	//kliknięcie w prawy przycik
	$("#btn-right").on("click", function(event) {
		next();
		changeSlide();
	});

	//przypisanie
});


// carouselList
