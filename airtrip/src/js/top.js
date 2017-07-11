$(function() {

	var $checkmeal = $('.js-checkmeal'),
	    $needmeal = $('.js-needmeal'),
	    $notneedmeal = $('.js-notneedmeal');

	$checkmeal.find('input').change(function() {

		var $this = $(this),
		    checked = $this.prop('checked');

		if ($this.hasClass('js-needmeal')) {
			if (checked) {
				$notneedmeal.prop('checked', false);
			}
		} else {
			if (checked) {
				$needmeal.prop('checked', false);
			}
		}
	});

})