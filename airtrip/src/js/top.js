$(function() {

	checkmeal();
	modal();
	selectArea();

	function checkmeal() {

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

	}

	function modal() {

		var $modalbtn = $('.js-modalbtn'),
		    $modalclose = $('.js-modalclose'),
		    $modal = $('.js-modal'),
		    $modalcontents = $('.js-modalcontents'),
		    winHeight,
		    modalHeight;

		$modalbtn.on('click', function() {
			if (!$modal.hasClass('is-open')) {
				$modal.addClass('is-open');
				modalHeight = $modalcontents.outerHeight();
				$modalcontents.css('top', - modalHeight + "px");
				$modal.animate({
					opacity: 1
				}, 300);
				$modalcontents.animate({
					top: 30 + 'px'
				}, 300);
			} else {
				$.when(
					$modalcontents.animate({
						top: - modalHeight + "px"
					}, 300),
					$modal.animate({
						opacity: 0
					}, 300)
				).done(function() {
					$modal.removeClass('is-open');
				});
			}
		});

	}


	function selectArea() {

		var $selectarea = $('.js-selectarea'),
		    $selectarea01 = $('#area01'),
		    $selectarea02 =$('#area02'),
		    $selectarea03 =$('#area03'),
		    $cleaBtn = $('.js-selectclearbtn');

		$selectarea.each(function() {

			var initialVal = $(this).find('option:first-child').prop('outerHTML');

			$.ajax({
				type: 'GET',
				url: 'src/js/area.json',
				dataType: 'json',
			}).done(function(area) {

				var areaVal = $selectarea01.val(),
				    target = $selectarea02;
				insertOption(area, areaVal, target);

				$selectarea01.change(function() {
					var $clearelem = $('#area02, #area03');
					selectclear($clearelem, initialVal);
					var areaVal = $(this).val(),
					    target = $selectarea02;
					insertOption(area, areaVal, target);
				});

			});

			$.ajax({
				type: 'GET',
				url: 'src/js/area2.json',
				dataType: 'json',
			}).done(function(area) {

				$selectarea02.change(function() {
					var $clearelem = $('#area03');
					selectclear($clearelem, initialVal);
					var areaVal = $(this).val();
					    target = $selectarea03;
					insertOption(area, areaVal, target);
				});

			});

			$cleaBtn.on('click', function() {
				$selectarea.each(function() {
					this.selectedIndex  = 0;
				});
			});

			function insertOption(area, areaVal, target) {
				for (var i in area[areaVal]) {
					var areaOption = '<option value="' + area[areaVal][i].f303area_id + '">' + area[areaVal][i].f303area_name + '</option>';
					target.append(areaOption);
				}
			}

		});

		function selectclear($clearelem, initialVal) {
			$clearelem.html(initialVal);
		}

	}

})