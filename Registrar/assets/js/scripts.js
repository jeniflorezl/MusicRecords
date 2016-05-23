
jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch([
                           "assets/img/backgrounds/a.jpg"
                         , "assets/img/backgrounds/c.jpg"
                         , "assets/img/backgrounds/d.jpg"
												 , "assets/img/backgrounds/e.jpg"
												 , "assets/img/backgrounds/g.jpg"
												 , "assets/img/backgrounds/h.jpg"
                         ], {duration: 3000, fade: 750});

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });

    /*
        Form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    $('.registration-form').on('submit', function(e) {

    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

    });


});
