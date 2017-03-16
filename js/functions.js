/*global $:false */
$(document).ready(function() {
		
		"use strict";
		
		var blur_effect;
		window.blur_effect = 1;

            var f = this;

            // add overlay to desire elems
            $('a.photo').append('<i class="overlay"></i>');

            if ( f.isIOS || f.isAndroid || f.isiPhone ) {
                $('i.overlay').hide();
            }
            else {

                // if browser is IE and version less than 9
                if ($.browser.msie && $.browser.version < 9) {
                    $('a.photo').each(function() {
                        var $overlay = $('i.overlay', this);
                            $overlay.hide();

                        $(this).hover(
                            function() { $overlay.show(); },
                            function() { $overlay.hide(); }
                        );
                    }); // end foreach
                }
                else {
                    $('a.photo').each(function() {
                        var $overlay = $('i.overlay', this);
                        $overlay.css('opacity', 0);

                        if(blur_effect) {
                            $(this).hover(
                                function() {
                                    var img_this = $(this).find('img'),
                                        img_blur = img_this.clone().addClass('blur-effect').prependTo(this);
                                    $overlay.stop().fadeTo(700, 1);
                                    img_blur.pixastic('blurfast', { amount: 0.3 } );
                                    img_blur.hide();
                                    img_blur.stop().fadeTo(700, 1);
                                    img_this = null;
                                },
                                function() {
                                    $overlay.stop().fadeTo(700, 0);
                                    $('.blur-effect', this).stop().fadeOut('slow', function() {
                                        $(this).remove();
                                    });
                                }
                            );
                        }
                        else {
                            $(this).hover(
                                function() { $overlay.stop().fadeTo(700, 1); },
                                function() { $overlay.stop().fadeTo(700, 0); }
                            );
                        } // end blurcheck
                    }); // end foreach
                }

            } // end user agent check
			
			var ftwidgetstitle = $('.footer-top .middle-title').width();
			var footertopwidth = $('.footer-top').width();
			$('.footer-top .middle-title').css('margin-left', ((footertopwidth-ftwidgetstitle)/2)+'px');
			$('.top-home-port').css('left', ((footertopwidth-128)/2)+'px');
			
			$('.accordion-body.in').parent().addClass('active');

			$('.accordion-toggle').click(function() { 
				$('.accordion-group').removeClass('active'); 
				$(this).parent().parent().addClass('active');
			});
			
			$('.bottom-left-arrow').css('left', (((footertopwidth / 3 )/2)-16)+'px');
			$('.top-left-arrow').css('left', (((footertopwidth / 3 )/2)-16)+'px');
			$('.bottom-right-arrow').css('right', (((footertopwidth / 3 )/2)-16)+'px');
			$('.top-right-arrow').css('right', (((footertopwidth / 3 )/2)-16)+'px');
			
			
			$('.dropdown').each(function () {
				$(this).parent().eq(0).hoverIntent({
					timeout: 100,
					over: function () {
						var current = $('.dropdown:eq(0)', this);
						current.slideDown(300);
					},
					out: function () {
						var current = $('.dropdown:eq(0)', this);
						current.fadeOut(100);
					}
				});
			});
			
			$('.post-thumb .overlay.blog a').each(function() {
				var imghh=$(this).parents('.post-thumb').children('img').height();
            	$('.post-thumb .overlay.blog a').css('margin-top', ((imghh/2)-24)+'px');    
            });
			
});
$(window).resize(function() {
	var ftwidgetstitle = $('.footer-top .middle-title').width();
	var footertopwidth = $('.footer-top').width();
	$('.footer-top .middle-title').css('margin-left', ((footertopwidth-ftwidgetstitle)/2)+'px');
	$('.top-home-port').css('left', ((footertopwidth-128)/2)+'px');
	$('.post-thumb .overlay.blog a').each(function() {
		var imghh=$(this).parents('.post-thumb').children('img').height();
		$('.post-thumb .overlay.blog a').css('margin-top', ((imghh/2)-24)+'px');    
	});	
}); 