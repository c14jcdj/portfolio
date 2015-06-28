(function(){
	
	function parallax() {
	    setpos("#pb0");
	    setpos("#pb1");
	    setpos("#pb2", 4);
	    setpos("#pb3");
	    setpos("#pb4");
	}

	function setpos(element, factor) {
	    factor = factor || 2;
	    
	    var offset = $(element).offset();
	    var w = $(window);
	    
	    // var posx = (offset.left - w.scrollLeft()) / factor;
	    var posy = (offset.top - w.scrollTop()) / factor;
	    
	    $(element).css('background-position', '50% '+posy+'px');
	    
	    // use this to have parralax scrolling vertical and horizontal
	    // $(element).css('background-position', posx+'px '+posy+'px');
	}

	function showSection(){
		$('#one').show().addClass('animated slideInLeft')
		$('#two').show().addClass('animated slideInRight')
		$('#three').show().addClass('animated slideInLeft')
	}

	$(function(){
		var strength1 = 50;
		var strength2 = 100;
		var strength3 = 200;
		$("html").mousemove(function(e){
		    var pageX = e.pageX - ($(window).width() / 2);
		    var pageY = e.pageY - ($(window).height() / 2);
		    $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() * pageY * -1)+"px");
		    $('#middleground').css("background-position", (strength2 / $(window).width() * pageX * -1)+"px "+(strength2  / $(window).height() * pageY * -1)+"px");
		    $('#foreground').css("background-position", (strength3 / $(window).width() * pageX * -1)+"px "+(strength3  / $(window).height() * pageY * -1)+"px");
		});

	



	

	$('#navlist a').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
  });


	
	timeoutID = window.setTimeout(showSection, 2000);


	var oldPageYOffset = 0;
	$(window).scroll(function(){
	  if (window.pageYOffset != oldPageYOffset)
	  {
	    oldPageYOffset = window.pageYOffset;
	    parallax()
	  }
	});
	

	})
}())