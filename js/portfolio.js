/* JavaScript for Proffirezka Portfolio page */

$(document).ready(function () {

    /* Portfolio filling function */

	// TODO: Make message listener
	var portfolioImagesURLs = [
		"images/portfolio-image1.jpg",
		"images/portfolio-image2.jpg",
		"images/portfolio-image3.jpg",
		"images/portfolio-image4.jpg",
		"images/portfolio-image5.jpg"
	];
	var portfolioCaptions = [
		"Вывеска с подсветкой из акрила для сети магазинов 'Магнит' на Уральской улице.",
		"Вывеска2",
		"Вывеска3",
		"Вывеска4",
		"Вывеска5"
	];
	var portfolioDates = [
		"7 Июля 2019",
		"13 Марта 2019",
		"10 Января 2019",
		"26 Ноября 2018",
		"12 Августа 2018"
    ];
    
	// Reset gallery
	$('.gallery-image img').attr('src', portfolioImagesURLs[0]);
	$('.gallery-image .caption').text(portfolioCaptions[0]);
    $('.gallery-image .date').text(portfolioDates[0]);
    
	// Fill gallery with images
	for(var i = 0; i < portfolioImagesURLs.length; i++)
		$('.gallery').append('<img src="' + portfolioImagesURLs[i] + '" id="index' + i +'" alt="Ошибка">');
	
    /* Gallery sliding functon */

	var imgCounter = 0;

	$('#back').click(function () {
		switchGalleryImage(-1);
	});
	$('#forward').click(function () {
		switchGalleryImage(1);
	});

	function switchGalleryImage(image) {
		$('#index' + imgCounter).removeClass('showed');
		imgCounter += image;
		if (imgCounter < 0) imgCounter = portfolioImagesURLs.length - 1;
		if (imgCounter >= portfolioImagesURLs.length) imgCounter = 0;
		$('.gallery-image img').attr('src', portfolioImagesURLs[imgCounter]);
		$('#index' + imgCounter).addClass('showed');
		$('.caption').text(portfolioCaptions[imgCounter]);
		$('.date').text(portfolioDates[imgCounter]);
    };

    /* Image select function */
    $('.gallery img').click(function () {
        $('#index' + imgCounter).removeClass('showed');
        imgCounter = $(this).attr('id')[5];
        $('#index' + imgCounter).addClass('showed');
        $('.gallery-image img').attr('src', portfolioImagesURLs[imgCounter]);
		$('.caption').text(portfolioCaptions[imgCounter]);
		$('.date').text(portfolioDates[imgCounter]);
    });

    $('#index' + imgCounter).addClass('showed');
});