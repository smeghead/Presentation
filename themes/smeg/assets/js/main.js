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

		updateWindowSize.apply(this);

		var clientHeight = $content.height();
// 		var clientHeight = $(window).height() -
// 			parseInt($content.css('padding-top'), 10) -
// 			parseInt($content.css('padding-bottom'), 10);
		var documentY = 0;
		$content.children().each(function(){
			documentY += $(this).outerHeight();
			documentY += parseInt($(this).css('margin-bottom'), 10);
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
	$('#left-navi').click(function(){
		presen.movePrev();
	});
	$('#right-navi').click(function(){
		presen.moveNext();
	});
});
