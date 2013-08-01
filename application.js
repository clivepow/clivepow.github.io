$(document).ready(function() {
	$('.c1').hover(function() {
        $('#content1').toggle(); 
        $('#content2').toggle();	
       	$('#a1').toggle();
       	
    });

	$('.c2').hover(function() {
        $('#content1').toggle();
        $('#content3').toggle();
        $('#a2').toggle();
    });
	
		


	$('.c3').hover(function() {
        $('#content1').toggle();
        $('#content4').toggle();
        $('#a3').toggle();
    });
	

});