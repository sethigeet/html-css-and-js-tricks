const modal = document.querySelector(".modal");
const smalls = document.querySelectorAll(".gallery img");
const big = document.querySelector(".big-img");
const caption = document.querySelector(".caption");

smalls.forEach((small) => {
    small.addEventListener("click", () => {
        modal.classList.add("open");
        big.classList.add("open");

        const bigSrc = small.getAttribute("data-big");
        big.src = `./images/${bigSrc}`;

        const altText = small.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        modal.classList.remove("open");
        big.classList.remove("open");
    }
});
