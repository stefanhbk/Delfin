$(function(){

	$("#sakrij").on("click",function(){
		$("#menu ul").slideToggle(250);
	})
	
	$("#goulash").hover(function(){
		$("#leftmenu").slideDown(3000).delay(2500).fadeIn( 2000 );
		$("#rightmenu").slideDown(3000).delay(2500).fadeIn( 2000 );
	});

	$(window).load(function(){
	$("#menuh3").delay(1000).slideUp(1000).fadeIn(1000);
	});

	$("#reservation").mouseenter(function(){
		$("#reserv").addClass("animated rubberBand");
	});

	$(".container").on("click", function(){
		$("#list").slideToggle(300).removeClass().addClass("animated fadeInLeft");
	});

	$(window).resize(function(){
var sirinaEkrana=$(window).width();
if (sirinaEkrana > 799 && $("#list").is(":hidden")){
	$("#list").removeAttr("style");
}
if (sirinaEkrana > 799 && $("#menu ul").is(":hidden")){
	$("#menu ul").removeAttr("style");
}

});

  
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});