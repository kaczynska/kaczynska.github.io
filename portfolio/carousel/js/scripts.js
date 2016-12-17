var carouselList;

$(function(){
	carouselList = $("#carousel ul");

	var currentSlide = 0;
	var offset = $("#carousel ul li").first().width();
	var numberOfElems = $("#carousel ul li").length;

	function prevSlide() {
		currentSlide = (currentSlide-1)%numberOfElems;

		if (currentSlide < 0) {
			currentSlide = numberOfElems-1;
		}

		changeSlide();
	}

	function nextSlide() {
		currentSlide = (currentSlide+1)%numberOfElems;
		changeSlide();
	}

	// function changeOrder() {
	// 	$(this)
	// 		.find("li:last")
	// 		.after($(this).find("li:first"));
	//
	// 	$(this)
	// 		.css({marginLeft:0});
	// }

	function changeSlide() {
		carouselList
			.animate({
				'marginLeft': -(currentSlide * offset)
			},
			500);

			console.log('currentSlide')
			console.log(currentSlide)
			//$('.dots').addClass()
	}

	//kliknięcie w lewy przycik
	$("#btn-left")
		.on("click", function(event) {
				prevSlide();
		});

	//kliknięcie w prawy przycik
	$("#btn-right")
		.on("click", function(event) {
			nextSlide();
		});

	setInterval(nextSlide, 5000); //co 3 sek. wykona funkcję zmieniającą slajd

	//przypisanie
});


// carouselList
