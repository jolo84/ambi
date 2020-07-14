$(document).ready(function(){
    let contact = function(){
         
        $("#contact").removeClass("hide");
        $("#about-me").addClass("hide");
        $("#service").addClass("hide");
        $(this).addClass("active");
        $("#tab-service").removeClass("active");
        $("#tab-about-me").removeClass("active");
     
    }
});