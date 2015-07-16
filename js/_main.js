/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
// (function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);
 
( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	htmlbody = $('html,body');
	var duration = 500;
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Init navigation
		      // initHomepageNav();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		// var s = skrollr.init({
		//     forceHeight: false,
		//     render: function(data) {
		//     }
		// });
		
		// Get window size
	    winH = $window.height();
	    winW = $window.width();
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 

		// Init Skrollr for 768 and up
		    // if( winW >= 768) {
		    if( !Modernizr.touch) {
		 
		        // Init Skrollr
		        var s = skrollr.init({
		            forceHeight: false
		        });
		 
		        // // Resize our slides
		        // $slide.height(winH);
		 
		        // s.refresh($('.homeSlide'));

		        // Resize our slides
		        $slide.height(winH);
		        $slideTall.height(winH*2);
		        $slideTall2.height(winH*3);
		        
		        // Refresh Skrollr after resizing our sections
		        s.refresh($('.homeSlide'));
		 
		    } else {
		 
		        $('#desktop').hide();
		        $('#mobile').show();
		        
		        var s = skrollr.init({
		            forceHeight: false
		        });

		 
		        
		        // Resize our slides
		        $slide.height(winH);
		        $slideTall.height(winH*1.5);
		        $slideTall2.height(winH*2.5);
		        
		        // Refresh Skrollr after resizing our sections
		        s.refresh($('.homeSlide'));

		    }

	    
	    
	}


	function ModalInfo(){
		this.projects = {
			'next-guide' : {
				'title' : 'Next Guide',
				'image' : 'nextguide.png',
				'link' : 'https://nextguide.tv',
				'stack' : ['bootstrap-logo.png',  'HTML5-Logo.png', 'mysql.png', 'js.png','rails-logo.png'],
				'list' : ['Sole front end developer on this project', 'Implemented the redesign of the site from static to responsive' ,'Added a custom breakpoint for an optimal mobile experience']
			},

			'ralph-racer' : {
				'title' : 'Race It Ralph',
				'image' : 'ralph.png',
				'link': 'http://ralph-racer.herokuapp.com',
				'stack' : [ 'CSS3.png', 'HTML5-Logo.png', 'js.png'],
				'list' : ['Solo project: HTML canvas game', 'Implemented using Object Oriented JS','Made use of Jquery widgets']
			},

			'glucose-amigo' : {
				'title' : 'Glucose Amigo',
				'image' : 'glucose.png',
				'link': 'http://glucose--amigo.herokuapp.com',
				'stack' : [ 'CSS3.png', 'HTML5-Logo.png', 'mysql.png', 'js.png','rails-logo.png'],
				'list' : [ 'Diabetic enters glucose levels; at weeks end the app generates a PDF of the data and sends to doctor','Makes use of HighCharts JS library for data visual representation', 'Turned Rails app into a single page app that relies on Ajax calls to load partials of each view']
			},

			'clorox' : {
				'title' : 'Clorox Matchmaker',
				'image' : 'bach.jpg',
				'link': 'javascript:void(0)',
				'stack' : [ 'bootstrap-logo.png','angular.jpeg', 'HTML5-Logo.png', 'mysql.png', 'js.png','rails-logo.png'],
				'list' : [ 'Sole front end developer', 'HTML view rendered in app container', 'To View: download Viggle app, search for show \'The Bachelorette\', click on play \'Clorox Matchmaker\'']
			},
			'afterlife' : {
				'title' : 'The Game of After Life',
				'image' : 'afterlife.png',
				'link': 'http://afterlife-game.herokuapp.com',
				'stack' : [ 'HTML5-Logo.png', 'js.png', 'CSS3.png', 'rails-logo.png'],
				'list' : [ 'First Place Hackathon', 'Simulation of humans running away from zombies during the apocolypse, eventually every human turns into a zombie', 'Makes use of Ajax calls to update positions from Ruby backend logic']
			},
			'wedding' : {
				'title' : 'Wedding App',
				'image' : 'wedding.png',
				'link': 'http://benandnicole620.herokuapp.com',
				'stack' : [ 'HTML5-Logo.png', 'js.png', 'bootstrap-logo.png','CSS3.png', 'rails-logo.png'],
				'list' : [ 'Sole developer for entire application: responsive', 'Allows wedding guests to RSVP and make food choice', 'Admin tool built in to interact with database']
			}
		}

		this.applyTextToModal = function(title, image, list, stack, link){
			$('.modal-title').text(title)
			$('.modal-body img').attr('src', 'images/'+image+'')
			$('.modal-footer .icons').empty()
			$('.modal-body ul').empty()
			for(var i=0, ii=stack.length; i < ii; i++){
				$('.modal-footer .icons').append('<img src="images/tech-icons/'+stack[i]+'">')
			}
			for(var i=0, ii=list.length; i < ii; i++){
				$('.modal-body ul').append('<li>'+list[i]+'</li>')
			}
			$('.modal-body a').attr('href', link)
			


		}
	}

	function bindModalConstructor(){
		$('.project-container').on('click', function(){
			var modalInfo = new ModalInfo(),
			 	project = $(this).data('project'),
			 	title = modalInfo.projects[project].title,
			 	image = modalInfo.projects[project].image,
			 	stack = modalInfo.projects[project].stack,
			 	link = modalInfo.projects[project].link,
			 	list = modalInfo.projects[project].list;
			modalInfo.applyTextToModal(title, image, list, stack, link)
		})

	}

	function hideName(){
		setTimeout(function(){
			$( ".main-name" ).fadeOut( "slow", function() {
    		$('.navbar').fadeIn('slow')
  		});
		}, 2000 )
	}

	function bindLinks(){
		$('#about-me').on('click', function () {
			$('html, body').animate({
			        scrollTop: $("#about-me-target").offset().top - 150
			    }, 2000);
		})
		$('#projects').on('click', function () {
			$('html, body').animate({
			        scrollTop: $("#projects-target").offset().top - 375
			    }, 2000);
		})
		$('#contact-me').on('click', function () {
			$('html, body').animate({
			        scrollTop: $("#footer").offset().top 
			    }, 2000);
		})
		$('#about-me-mobile').on('click', function () {
			var s = skrollr.init({
		            forceHeight: false
		        });
			var target = $("#about-me-target-mobile").offset().top
			s.animateTo(target)
			
		})
		$('#projects-mobile').on('click', function () {
			var s = skrollr.init({
		            forceHeight: false
		        });
			var target = $("#header").offset().top
			s.animateTo(target)
			
		})
		$('#contact-me-mobile').on('click', function () {
			var s = skrollr.init({
		            forceHeight: false
		        });
			var target = $("#footer-mobile").offset().top
			s.animateTo(target)
		})
		
	}

	bindModalConstructor()
	hideName()
	bindLinks()
		
} )( jQuery );