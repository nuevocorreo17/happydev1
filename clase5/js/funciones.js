jQuery(document).ready(function(){

	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery(".cabecera nav").toggleClass("open");
		jQuery(this).find("i").toggleClass("fa-bars").toggleClass("fa-times");
	});

	jQuery(".flecha-saltando").click(function(e){
		e.preventDefault();
		var p = jQuery(this).closest("section").next("section").offset().top;

		jQuery("html,body").stop().animate({
			"scrollTop" : p
		},500,function(){

		});

	});

	jQuery(".cabecera nav a[href*='#']").click(function(e){
		e.preventDefault();

		var id = this.hash;

		if(jQuery(id).length > 0)
		{
			var p = jQuery(id).offset().top;

			jQuery("html,body").stop().animate({
				"scrollTop" : p
			},500,function(){

			});
		}
	})

	
});

jQuery(window).scroll(function(){
	var scroll = jQuery(document).scrollTop();

	if(scroll >= 100)
	{
		jQuery(".cabecera").addClass("oscuro");
	}else{
		jQuery(".cabecera").removeClass("oscuro");
	}
});


