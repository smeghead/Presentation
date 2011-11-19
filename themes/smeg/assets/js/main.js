$(function(){
	var transform = function(elm, scale){
		elm.css('-moz-transform-origin', '0 0');
		elm.css('-webkit-transform-origin', '0 0');
		elm.css('-moz-transform', scale);
		elm.css('-webkit-transform', scale);
	};
	var updateWindowSize = Presentaiton.prototype.updateWindowSize;
	Presentaiton.prototype.updateWindowSize = function(){
		var $content = $('div.contents:visible');
		transform($content, '0 0');

		updateWindowSize();

		var documentY = 0;
		var clientHeight = $content.height();
		$content.children().each(function(){
			documentY += $(this).outerHeight();
		});
		console.log('documentY > clientHeight ' + documentY + ' > ' + clientHeight);
		if (documentY > clientHeight) {
			var percentage = (clientHeight / documentY) * 100;
			percentage = parseInt(percentage, 10);
			var scale = 'scale(' + (percentage / 100) + ')';
			console.log(scale);

			transform($content, scale);
		}
	};

	window.presen = new Presentaiton(); 
});
