$(document).ready(function(){

	var modal = document.getElementById('about');
	var	btn = document.getElementById('nav-about');
	var	close = document.getElementById('nav-close');

	btn.addEventListener('click', function () {
		modal.style.visibility = 'visible';
		modal.style.opacity = '100';
	}, false);

	close.addEventListener('click', function () {
		modal.style.visibility = 'hidden';
		modal.style.opacity = '0';
	}, false);

	modal.addEventListener('click', function () {
		modal.style.visibility = 'hidden';
		modal.style.opacity = '0';
	}, false);

	// btn scroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('div').animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});
});