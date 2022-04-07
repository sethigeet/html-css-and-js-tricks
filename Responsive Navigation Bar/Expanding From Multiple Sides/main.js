const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach((link, index) => {
        link.style.transition = `all 0.5s ease ${(index + 1) / 5}s`;
        link.classList.toggle("fade");
    });
});
