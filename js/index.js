/* JavaScript for Proffirezka Index Page */

$(document).ready(function () {

	/* Gallery Banner Function */

	// TODO: change URLs to server absolute links. This URLs is used for developing preview.

	var imagesURLs = [
		"https://cdn1.imggmi.com/uploads/2019/7/12/8bb98bae965db52f7bb9fd90cebde7e8-full.jpg",
		"https://cdn1.imggmi.com/uploads/2019/7/12/ea0750c24b99ff9bf75265bad2adbcea-full.jpg",
		"https://cdn1.imggmi.com/uploads/2019/7/12/463d6a1d0409b6f2d6c4e5a35a38b2f3-full.jpg"
	];
	var headings = [
		"Создание вывесок <br> любой сложности",
		"Фрезеровка заготовок <br> на станке",
		"Резка акрила <br> на лазере"
	];
	var counter = 0;
	var banner = $('.banner');

	for (i = 0; i < imagesURLs.length; i++) $('.banner div:first-child').append('<span class="dot"></span>');
	$('.banner div span:first-child').addClass('active');

	$('#prev').click(function () {
		switchBannerBackground(-1);
	});
	$('#next').click(function () {
		switchBannerBackground(1);
	});

	function switchBannerBackground(slide) {

		// Switch background image
		counter += slide;
		if (counter >= imagesURLs.length) counter = 0;
		if (counter < 0) counter = imagesURLs.length - 1;
		banner.css({
			'background': 'url(' + imagesURLs[counter] + ') no-repeat',
			'background-size': 'cover',
			'background-position': 'center'
		});

		// Animate background changing
		if (banner.css('animationName') === "fade") banner.css('animationName', 'nextFade');
		else banner.css('animationName', 'fade');

		// Highlight new dot 
		let dot = counter + 1;
		for (i = 1; i <= imagesURLs.length; i++) $('section div span:nth-child(' + i + ')').removeClass('active');
		$('.banner div span:nth-child(' + dot + ')').addClass('active');

		// Change heading
		$('.banner h2').html(headings[counter]);

		// TODO: Auto slideshow
	};
});