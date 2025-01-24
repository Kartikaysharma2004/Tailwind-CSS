document.getElementById("nav-toggle").addEventListener("click", function () {
    let menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});

document.getElementById("Partners").addEventListener("mouseover", function () {
    let brands = document.getElementById("image-container");
    brands.classList.add("paused-animation");
});

document.getElementById("Partners").addEventListener("mouseout", function () {
    let brands = document.getElementById("image-container");
    brands.classList.remove("paused-animation");
});

const logos = [
    { src: "images/Swiggy-Logo.png", alt: "Swiggy-Logo", width: "w-20" },
    { src: "images/Zomato-logo.png", alt: "Zomato-logo", width: "w-20" },
    { src: "images/deliveroo-logo.svg", alt: "deliveroo-logo", width: "w-20" },
    { src: "images/Delivery-Hero-Logo.png", alt: "Delivery-Hero-Logo", width: "w-20" },
    { src: "images/Foodpanda-Logo.png", alt: "Foodpanda-Logo", width: "w-20" },
    { src: "images/Blinkit-Logo.png", alt: "Blinkit-Logo", width: "w-16" },
    { src: "images/Dominos-Logo.png", alt: "Dominos-Logo", width: "w-20" },
    { src: "images/Glovo_logo.png", alt: "Glovo-logo", width: "w-20" },
    { src: "images/DoorDash-logo.png", alt: "DoorDash-logo", width: "w-20" },
    { src: "images/Just_Eat-Logo.svg", alt: "Just_Eat-Logo", width: "w-20" },
    { src: "images/Grubhub-Logo.png", alt: "Grubhub-Logo", width: "w-20" },
    { src: "images/postmates.png", alt: "Postmates", width: "w-20" },
    { src: "images/Uber-Eats-logo.png", alt: "Uber-Eats-logo", width: "w-20" },
    //Duplicate images to ensure continuous sliding 
    { src: "images/Swiggy-Logo.png", alt: "Swiggy-Logo", width: "w-20" },
    { src: "images/Zomato-logo.png", alt: "Zomato-logo", width: "w-20" },
    { src: "images/deliveroo-logo.svg", alt: "deliveroo-logo", width: "w-20" },
    { src: "images/Delivery-Hero-Logo.png", alt: "Delivery-Hero-Logo", width: "w-20" },
    { src: "images/Foodpanda-Logo.png", alt: "Foodpanda-Logo", width: "w-20" },
    { src: "images/Blinkit-Logo.png", alt: "Blinkit-Logo", width: "w-16" },
    { src: "images/Dominos-Logo.png", alt: "Dominos-Logo", width: "w-20" },
    { src: "images/Glovo_logo.png", alt: "Glovo-logo", width: "w-20" },
    { src: "images/DoorDash-logo.png", alt: "DoorDash-logo", width: "w-20" },
    { src: "images/Just_Eat-Logo.svg", alt: "Just_Eat-Logo", width: "w-20" },
    { src: "images/Grubhub-Logo.png", alt: "Grubhub-Logo", width: "w-20" },
    { src: "images/postmates.png", alt: "Postmates", width: "w-20" },
    { src: "images/Uber-Eats-logo.png", alt: "Uber-Eats-logo", width: "w-20" },
];

const container = document.getElementById("image-container");

// Generate and append image elements
logos.map((logo) => {
    const img = document.createElement("img");
    img.src = logo.src;
    img.alt = logo.alt;
    img.className = `${logo.width} mx-4`;
    img.loading = "lazy";
    container.appendChild(img);
});
