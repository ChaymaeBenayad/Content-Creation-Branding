 // JAVASCRIPT FUNCTIONS
 $(document).ready(function(){
            $('.menu-toggle').click(function(){
                $('nav').toggleClass('active')
            })

            $('ul li').click(function(){
                $(this).siblings().removeClass('active');
                $(this).toggleClass('active');
            })
        })
function scrollToAbout() {

    if ($('.section1').length != 0) {
      $("html, body").animate({
        scrollTop: $('.section1').offset().top
      }, 1000);
    }
  }
function scrollToServices() {

if ($('.section2').length != 0) {
  $("html, body").animate({
    scrollTop: $('.section2').offset().top
  }, 1000);
}
}
function scrollToProjects() {

if ($('.section3').length != 0) {
  $("html, body").animate({
    scrollTop: $('.section3').offset().top
  }, 1000);
}
}
 var i=0;
    	function read(){
    		if (!i) {
    			document.getElementById("more").style.display = "inline";
    			document.getElementById("dots").style.display = "none";
    			document.getElementById("read").innerHTML = "Read Less";
    			i=1;
    		}
    		else{
    			document.getElementById("more").style.display = "none";
    			document.getElementById("dots").style.display = "inline";
    			document.getElementById("read").innerHTML = "Read More";
    			i=0;
    		}
    	}
