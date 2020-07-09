$(window).ready(function(){
    let timelineHObj = $("#timeline").css("height");
    let timelineHeight = Number(timelineHObj.replace("px", ""));
    let timelineBgHObj = $(".timeline-bg").css("height");
    let timelineBgHeight = Number(timelineBgHObj.replace("px", ""));
    let timelineRel = timelineBgHeight / timelineHeight;
    console.log(timelineRel);
    let timelineBgMarginTop = (1 - timelineRel) * 50;
    console.log(timelineBgMarginTop);

    $(".timeline-bg").css({"margin-top": timelineBgMarginTop - 7 + "%"})

    $(window).scroll(function(){
        if($(document).scrollTop() > $("header").height()){
            $(".timeline-container").eq(0).animate({"opacity": "1"},"fast");
        }
        let i;
        let iMax = $(".timeline-container").length;
        console.log(iMax);
        for(i = 1; i <= iMax; ++i ){
            let headerHObj = $("header").css("height");
            let headerH = Number(headerHObj.replace("px", ""));
            let containerHObj = $(".timeline-container").css("height");
            let containerH = Number(containerHObj.replace("px", ""));
            if($(document).scrollTop() > headerH + (containerH * i) ){
                $(".timeline-container").eq(i).animate({"opacity": "1"},"fast");
            }   
        }

    });

});