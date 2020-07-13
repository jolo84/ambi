$(document).ready(function(){
    $("#tab-about-me").click(function(){
       $("#about-me").removeClass("hide");
       $("#service").addClass("hide");
       $("#contact").addClass("hide");
       $(this).addClass("active");
       $("#tab-service").removeClass("active");
       $("#tab-contact").removeClass("active");
    });

    $("#tab-service").click(function(){
        $("#service").removeClass("hide");
        $("#about-me").addClass("hide");
        $("#contact").addClass("hide");
        $(this).addClass("active");
        $("#tab-about-me").removeClass("active");
        $("#tab-contact").removeClass("active");
     });

     $("#tab-contact").click(function(){
        $("#contact").removeClass("hide");
        $("#about-me").addClass("hide");
        $("#service").addClass("hide");
        $(this).addClass("active");
        $("#tab-service").removeClass("active");
        $("#tab-about-me").removeClass("active");
     });

     $("#btn-contact").click(function(){
        $("#contact").removeClass("hide");
        $("#about-me").addClass("hide");
        $("#service").addClass("hide");
        $(this).addClass("active");
        $("#tab-service").removeClass("active");
        $("#tab-about-me").removeClass("active");
     });

/*
    $(".question-1-header").click(function(){
        $(".question-1-header span i")
            .toggleClass("fa-sort-down")
            .toggleClass("fa-sort-up");
        $(".question-1-answer")
            .toggleClass("hide");
    });

    $(".question-2-header").click(function(){
        $(".question-2-header span i")
            .toggleClass("fa-sort-down")
            .toggleClass("fa-sort-up");
        $(".question-2-answer")
            .toggleClass("hide");
    });

    $(".question-3-header").click(function(){
        $(".question-3-header span i")
            .toggleClass("fa-sort-down")
            .toggleClass("fa-sort-up");
        $(".question-3-answer")
            .toggleClass("hide");
    });*/
});