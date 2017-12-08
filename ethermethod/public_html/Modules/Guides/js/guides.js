window.onload = function () {
    displayTitles();
    displaySubtitleLabels();
};

displayTitles = function () {
    document.querySelector("#title").style.opacity = 1;
    document.querySelector("#subtitle").style.opacity = 1;
    document.querySelector("hr").style.opacity = 1;
    document.querySelector("hr").style.width = "35%";
};

displaySubtitleLabels = function () {
    //fade in the subtitle labels in a staggered sequence
    setTimeout(function () {
        document.querySelector("#read").style.opacity = 1;
        setTimeout(function () {
            document.querySelector("#bullet1").style.opacity = 1;
            setTimeout(function () {
                document.querySelector("#learn").style.opacity = 1;
                setTimeout(function () {
                    document.querySelector("#bullet2").style.opacity = 1;
                    setTimeout(function () {
                        document.querySelector("#win").style.opacity = 1;
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}
