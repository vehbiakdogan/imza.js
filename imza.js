/* 
	Bu Js Dosyasi Vehbi Akdogan Tarafindan Kodlanmistir.
	@outhor : Vehbi Adoğan
	Versiyon: 1.0 (21 Kasın 2014)
	E-Posta: mf.leqelyy@gmail.com
	Web: vehbiakdogan.com
*/

(function($){
	$.fn.imza  = function(config){
		var ayarlar = $.extend({
			'metin' : 'Design And Code By', // girilecek Metin
			'url' : '#', // tıklandığında yönlenecek Adres
			'color': "#000", // yazı rengi 
			'logoYol': 'style/images/logo.png' // Mevcut logo yolu
		},config);
		
		
		return this.each(function(){
			var body = $("body");
			if($("#vehbiAkdoganImza").size() == 0){
				body.append('<div id="vehbiAkdoganImza"><span class="vehbiAkdoganYazi">'+ ayarlar.metin +'</span><img src="' + ayarlar.logoYol + '"  height="38" /></div>');
			}else {
				$("#vehbiAkdoganImza").html('<span class="vehbiAkdoganYazi">'+ ayarlar.metin +'</span><img src="' + ayarlar.logoYol + '"  width="60" />');
			}
			
			
			var div = $("#vehbiAkdoganImza");
			var span = div.find('span.vehbiAkdoganYazi');
			var img = div.find('img');
			
			img.css({
				"float"					:	"right",
				'margin-left'			:	"10px",
				"transition"			:	".5s all linear",
				"-webkit-transition"	:	".5s all linear",
				"-moz-transition"		:	".5s all linear",
				"-o-transition"			:	".5s all linear",
			});
			
			span.css({
				"float"			:	"left",
				'position'		:	"relative",
				'overflow' 		:	"hidden",
				'top' 			: 	'8px',
				'font'			:	'12px arial',
				'color' 		: 	ayarlar.color,
				"display" 		: 	"none"
			});
			var ekranGenislik = $(window).width();
			var divGenislik = span.width() + img.width() + 75;
			div.css({
				'position'	:	"fixed",
				'bottom'	:	 '5%',
				'left' 		: 	(ekranGenislik - divGenislik - 20 ) + "px",
				'z-index'	:	"999",
				'overflow'	:	"hidden",
				"cursor" 	: 	"pointer",
				"padding" 	: 	"8px 6px",
				"width" 	: 	divGenislik + "px"
			});
			
			
			 div.hover(function(){
				span.fadeIn(500);
				img.css({
					'transform'				: 	'rotate(15deg)',
					'-webkit-transform'		: 	'rotate(15deg)',
					'-moz-transform'		: 	'rotate(15deg)',
					'-o-transform'			: 	'rotate(15deg)',
				});
				
			},function(){
				span.fadeOut(500);
				img.css({
					'transform'			: 	'rotate(0deg)',
					'-webkit-transform'	: 	'rotate(0deg)',
					'-moz-transform'	: 	'rotate(0deg)',
					'-o-transform'		: 	'rotate(0deg)',
				});
			});
			
			div.click(function(){
				window.location.href = ayarlar.url;
			}); 
			
			$(window).resize(function(){
				var ekranGenislik = $(window).width();
				var divGenislik = span.width() + img.width() + 10;
				div.css({'left':(ekranGenislik - divGenislik - 20 ) + "px",});
				
			});
			
			
		});
	}
	
	
	
})(jQuery);
