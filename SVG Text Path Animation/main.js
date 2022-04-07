const textPath = document.querySelector("#text-path");

const updateTextPathOffset = (offset) => {
    textPath.setAttribute("startOffset", offset);
};

const onScroll = () => {
    requestAnimationFrame(() => {
        updateTextPathOffset(window.scrollY * 0.6);
    });
};

window.addEventListener("scroll", onScroll);

const titles = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
});

titles.forEach((title) => {
    observer.observe(title);
});
