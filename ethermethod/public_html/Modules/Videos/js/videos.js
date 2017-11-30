window.onload = function () {
    displayTitles();
    displaySubtitleLabels();
};

displayTitles = function () {
    $("#title").css("opacity", 1);
    $("#subtitle").css("opacity", 1);
    $("hr").css("opacity", 1);
    $("hr").css("width", "35%");
};

displaySubtitleLabels = function () {
    //fade in the subtitle labels in a staggered sequence
    setTimeout(function () {
        $("#read").css("opacity", 1);
        setTimeout(function () {
            $("#bullet1").css("opacity", 1);
            setTimeout(function () {
                $("#learn").css("opacity", 1);
                setTimeout(function () {
                    $("#bullet2").css("opacity", 1);
                    setTimeout(function () {
                        $("#win").css("opacity", 1);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}
