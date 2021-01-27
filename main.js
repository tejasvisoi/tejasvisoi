$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});
fetch("https://api.apispreadsheets.com/data/7006/", {
	method: "POST",
	body: JSON.stringify({"data": {"#full_name":"","#email":"fskn ","#phone":"hfsndkfk","#message":"sfdn skdn        "}}),
    
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
    }
    AOS.init({
        easing: 'ease',
        duration: 1000
    });
})

