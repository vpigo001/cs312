src = "../../../public/js/jquery-3.2.1.min.js";

window.onload = function () {
    setTimeout(animateHomePage, 1000);
};

animateHomePage = function () {
    removeGrayscale();
    displayTitles();
    setTimeout(displayNavButtons, 1000);
};

removeGrayscale = function () {
    $("body,html").css("background-blend-mode", "unset");
};

displayTitles = function () {
    $("#title").css("opacity", 1);
    $("#subtitle").css("opacity", 1);
    $("hr").css("opacity", 1);
    $("hr").css("width", "50%");
};

displayNavButtons = function () {
    //fade in the nav buttons in a staggered sequence
    setTimeout(function () {
        $("#navButton1").css("opacity", 1);
        setTimeout(function () {
            $("#navButton2").css("opacity", 1);
            setTimeout(function () {
                $("#navButton3").css("opacity", 1);
            }, 500);
        }, 500);
    }, 500);

    //make the transition property faster for "hover" transitions.
    //had to apply a new class because changing the property directly didn't work.
    setTimeout(function () {
        $("#navButton1").addClass("nav-button-loaded");
        $("#navButton2").addClass("nav-button-loaded");
        $("#navButton3").addClass("nav-button-loaded");
    }, 1600);

};