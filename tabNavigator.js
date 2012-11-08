(function($) {

	var options;

	$.fn.tabNavigator = function(params){

	params.startActive = params.startActive || 0;
		
	options = $.extend({}, options, params);

	// Активируем ТАБ по умолчанию
	$('.'+options.tabName).eq( options.startActive ).show();
	
	// Добавляем к автивному ТАБУ класс, если такой существует
	if (options.tabActiveClass) {
		$('.'+options.tabName).eq( options.startActive ).addClass(options.tabActiveClass);
	}

	// Активному Пункту Меню добавляем класс, если такой существует
	if (options.menuActiveClass) {
		$(this).find('li').eq(options.startActive).addClass(options.menuActiveClass)	
	}

	$(this).on('click', 'li', function(e) {
		
			if (options.menuActiveClass) {
				$(this).closest('ul').find('li').removeClass(options.menuActiveClass);		
				$(this).addClass(options.menuActiveClass);
			}

			if (options.tabActiveClass) {
				$('.'+options.tabName).removeClass(options.tabActiveClass);
				$('.'+options.tabName).eq( $(this).closest('ul').find('li').index( $(this) ) ).addClass(options.tabActiveClass);
			}

			$('.'+options.tabName).hide();		
			$('.'+options.tabName).eq( $(this).closest('ul').find('li').index( $(this) ) ).show();
		});

		return this;  
	};

})(jQuery);