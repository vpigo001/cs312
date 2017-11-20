src="../../../public/js/jquery-3.2.1.min.js";

window.onload = function () {
    setTimeout(removeGrayscale, 1000);
};

removeGrayscale = function () {
    $("body,html").css("background-blend-mode", "unset");
}

