$('.target').on('click', function() {
	var portfolio_id = $(this).attr('data-role');
	$('.art_container').slideUp(500, function() {
		$('.visible').removeClass('visible');
		$('.' + portfolio_id).addClass('visible');
		$('.art_container').slideDown(1000);
	});
});