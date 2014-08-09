
//Smooth Scroll on Page
$(function() {
	$('#arrow a, .nav a, .nav li a, .footernav a').bind('click',function(event){
	var $anchor = $(this);

	$('html, body').stop().animate({
	scrollTop: $($anchor.attr('href')).offset().top -61
	}, 1500,'easeInOutExpo');

	event.preventDefault();
	});
});

//Data Rel
$('a[data-rel]').each(function() {
    $(this).attr('rel', $(this).data('rel'));
});
	
//Resize Home	
$(function(){
	$('#home').css({'height':($(window).height())+'px'});
	$('#arrow img').css({'margin-left':($(window).width()/2) - 30 +'px'});
	
	$(window).resize(function(){
		$('#home').css({'height':($(window).height())+'px'});
	});
});	

//PrettyPhoto
$(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({
          opacity: 0.5,
          social_tools: "",
          deeplinking: false
       });
});		

//Nice Scroll	
$(document).ready(
	function() {  
		$("html").niceScroll();
	}
);	

//Parallax	
$(window).bind('load', function () {
		parallaxInit();						  
	});

	function parallaxInit() {
		$('#info').parallax("30%", 0.1);
		$('#trofei').parallax("30%", 0.1);
		$('#equip').parallax("30%", 0.1);
		$('#gallery').parallax("30%", 0.1);
		$('#contattaci').parallax("30%", 0.1);
		/*add as necessary*/
	}	
	
//Home Slider
jQuery(function($){
				
	$.supersized({
				
		// Functionality
		slide_interval          :   3000,		// Length between transitions
		transition              :   7, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	700,		// Speed of transition
															   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
			{image : 'images/headers/head1.jpg', title : '<p>Benvenuto nel nostro <strong>Sito Web</strong>'},
			{image : 'images/headers/head2.jpg', title : '<p>Entra anche <strong>TU</strong> a far parte del nostro <strong>Team</strong></p>'},  
			{image : 'images/headers/head3.jpg', title : '<p>Seguici sul nostro <strong>Blog</strong></p>'},  
		]
					
	});
});

//Nav
$('.nav a').click(function () { $(".nav-collapse").collapse("hide") });

//Move Nav
$(window).scroll(function(){ 
 if ($(this).scrollTop() > 10){ 
	$('.navbar-inner').addClass("move_menu");
 } 
 else{
	$('.navbar-inner').removeClass("move_menu");
 }
});

$("#sliding").carouFredSel({

	items				: 1,
	direction			: "down",	
	pagination  : "#sliding_pag"
});

$('.carousel').carouFredSel({
	responsive: true,
	width: 'auto',
	height: 'auto',
	items	: 1,
	prev    : {
        button  : "#carousel_prev",
        key     : "left"
    },
    next    : {
        button  : "#carousel_next",
        key     : "right"
    },
})


// Accordion

$('dl.accordion dt').filter(':first-child').addClass('accordion-active');
$('dd.accordion-content').filter(':nth-child(n+3)').addClass('hide');
	
$('dl.accordion').on('click', 'dt', function() {
		$(this)
			.addClass('accordion-active')
			.next()
				.slideDown(200)
				.siblings('dd.accordion-content')
					.slideUp(200)
			.prev()
				.removeClass('accordion-active');
});

// Tabs
	
$(".tab_container").hide(); //Hide all content
$("ul.tabs li:first").addClass("tab-active").show(); //Activate first tab
$(".tab_container:first").show(); //Show first tab content
	
$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("tab-active"); //Remove any "active" class
		$(this).addClass("tab-active"); //Add "active" class to selected tab
		$(".tab_container").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
});
	
// Toggle	
$(".toggle_container").hide(); 
$("span.toggle-title").click(function(){
		$(this).toggleClass("toggle-active").next().slideToggle("normal");
		return false; 
});

//Extra
$('.element_from_left').each(function () {
	$(this).appear(function() {
	  $(this).animate({opacity:1,left:"0px"},1200);
	});	
});

$('.element_from_right').each(function () {
	$(this).appear(function() {
	  $(this).animate({opacity:1,right:"0px"},1200);
	});	
});

$('.bar li').each(function () {
	$(this).appear(function() {
	  $(this).animate({opacity:1,left:"0px"},1200);
	  var b = $(this).find("span").attr("data-width");
      $(this).find("span").animate({
        width: b + "%"
      }, 1700, "easeOutCirc");
	});	
});


//Isotope

var $container = $('#portfolio_container');

      $container.isotope({
        itemSelector : '.portfolio'
      });
      
      
      var $optionSets = $('.option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
	  
$(function () {
    var element = $("#arrow img");
    (function(){
        element
            .animate({ marginTop: 30 }, 1000)
            .animate({ marginTop: 10 }, 1000, arguments.callee);
    }());
});	  



$("#map").gMap({ controls: false,
	scrollwheel: false,
	draggable: false,
	markers: [{ latitude: 41.513848,
				longitude: 13.606886,
				icon: { image: "images/misc/marker.png",
					iconsize: [48, 48],
					iconanchor: [48,48],
					infowindowanchor: [12, 0]
				}
			}],
	icon: { image: "images/misc/marker.png",
			iconsize: [48, 48],
			iconanchor: [48, 48],
			infowindowanchor: [12, 0] },
			latitude: 41.513848,
			longitude: 13.606886,
			zoom: 14
});

$(window).load(function() {
	$("#over").fadeOut();
	$("#preload").delay(350).fadeOut("slow");
})

//contact form
	$(document).ready(function() {
	var options = {
	target: '#errors',
	beforeSubmit: showRequest,
	success: showResponse
	};
	$('#form').ajaxForm(options);
	});
	function showRequest(formData, jqForm, options) {
	var queryString = $.param(formData);
	return true;
	}
	function showResponse(responseText, statusText)  {
	}
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
			return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = '';
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
		});
	};
