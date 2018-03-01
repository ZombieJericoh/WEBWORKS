function myFunction(x) {
    x.classList.toggle("change");
}


$(document).ready(function(){

$(".menu-items").hide();

$(".cham-ico").on("mouseover", function(){
	$(".menu-items").show();
	});

	$(".cham-ico").on("mouseout", function(){
	$(".menu-items").hide();
    });
});