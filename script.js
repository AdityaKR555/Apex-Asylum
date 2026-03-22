window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
        console.log("Scrolled down", window.scrollY);
    } else {
        navbar.classList.remove("scrolled");
    }
});