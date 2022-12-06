var i = 0;
document.querySelector("button").addEventListener("click", function () {
    document.querySelectorAll(".tile")[i++].style.opacity = 1;
});