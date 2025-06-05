// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Cầu thủ bóng đá.", "Thủ lĩnh của đội bóng.","Người truyền cảm hứng."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});


$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});


$('.counter').countUp();

AOS.init();
