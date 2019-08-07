/* Common JavaScript for every Proffirezka Page */

$(document).ready(function () {

	/* Mobile Menu Function */

	$('nav').hide();
	$('#menu-click').click(function () {

		$('nav').slideToggle(1000);
		this.className = this.className === 'down' ? 'up' : 'down';

	});
	
});