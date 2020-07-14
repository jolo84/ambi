$(window).ready(function(){
    let timelineHObj = $("#timeline").css("height");
    let timelineHeight = Number(timelineHObj.replace("px", ""));
    let timelineBgHObj = $(".timeline-bg").css("height");
    let timelineBgHeight = Number(timelineBgHObj.replace("px", ""));
    let timelineRel = timelineBgHeight / timelineHeight;
    console.log(timelineHObj);
    let timelineBgMarginTop = (1 - timelineRel) * 50;
    console.log(timelineBgMarginTop);

    $(".timeline-bg").css({"margin-top": timelineBgMarginTop - 7 + "%"})


    $(window).scroll(function(){
        if($(document).scrollTop() > $("header").height()*1.3){
            $(".timeline-container").eq(0).fadeIn(2000);
            $("#timeline-circle-1").eq(0).fadeIn(2000);
        }
        let i;
        let iMax = $(".timeline-container").length;
        for(i = 1; i <= iMax; ++i ){
            let headerHObj = $("header").css("height");
            let headerH = Number(headerHObj.replace("px", ""));
            let containerHObj = $(".timeline-container").css("height");
            let containerH = Number(containerHObj.replace("px", ""));
            if($(document).scrollTop() > (headerH + (containerH * i))*1.3 ){
                $(".timeline-container").eq(i).fadeIn(1000);
                $(".timeline-circle").eq(i).fadeIn(1000);
                console.log(i);
            }
            console.log(i);
        }

    });

});