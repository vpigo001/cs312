window.onload = function () {
    setTimeout(animateHomePage, 1000);
};

animateHomePage = function () {
    removeGrayscale();
    displayTitles();
    setTimeout(displayNavButtons, 1000);
};

removeGrayscale = function () {
    document.querySelector("body").classList.add("greyscale-removed");
};

displayTitles = function () {
    document.querySelector("#title").style.opacity = 1;
    document.querySelector("#subtitle").style.opacity = 1;
    document.querySelector("hr").style.opacity = 1;
    document.querySelector("hr").style.width = "50%";
};

displayNavButtons = function () {
    //fade in the nav buttons in a staggered sequence
    setTimeout(function () {
        document.querySelector("#navButton1").style.opacity = 1;
        setTimeout(function () {
            document.querySelector("#navButton2").style.opacity = 1;
            setTimeout(function () {
                document.querySelector("#navButton3").style.opacity = 1;;
            }, 500);
        }, 500);
    }, 500);

    //make the transition property faster for "hover" transitions.
    //had to apply a new class because changing the property directly didn't work.
    setTimeout(function () {
        document.querySelector("#navButton1").classList.add("nav-button-loaded");
        document.querySelector("#navButton2").classList.add("nav-button-loaded");
        document.querySelector("#navButton3").classList.add("nav-button-loaded");
    }, 1600);

};