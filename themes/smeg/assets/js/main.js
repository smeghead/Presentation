$(function(){
	var updateWindowSize = Presentaiton.prototype.updateWindowSize;
	Presentaiton.prototype.updateWindowSize = function(){
		updateWindowSize();
		var $content = $('div.contents:visible');
		var documentY = 0;
		var clientHeight = $content.height();
		$content.children().each(function(){
			documentY += $(this).outerHeight();
		});
		if (documentY > clientHeight) {
			var percentage = (clientHeight / documentY) * 100;
			percentage = parseInt(percentage, 10);
			$content.css('font-size', percentage + '%');

			resizeFont($content, percentage);
		}
	};

	var resizeFont = function(elm, percentage){
		elm.children().each(function(){
			var $this = $(this);
			var org = $this.css('font-size').replace(/[^\d]/g, '');
			var newPercentage = org * percentage / 100;
			$this.css('font-size', parseInt(newPercentage, 10) + 'px');

			resizeFont($this, percentage);
		});
	};
	window.presen = new Presentaiton(); 
});
