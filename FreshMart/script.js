document.getElementById("nav-toggle").addEventListener("click", function () {
    let menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});

document.getElementById("Partners").addEventListener("mouseover", function () {
    let brands = document.getElementById("brands");
    brands.classList.add("paused-animation");
});

document.getElementById("Partners").addEventListener("mouseout", function () {
    let brands = document.getElementById("brands");
    brands.classList.remove("paused-animation");
});

