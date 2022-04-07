const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = gsap.timeline();

tl.fromTo(
    hero,
    { height: "0%" },
    { height: "80%", ease: "power2.inOut", duration: 1 }
)
    .fromTo(
        hero,
        { width: "100%" },
        { width: "80%", ease: "power2.inOut", duration: 1.2 }
    )
    .fromTo(
        slider,
        { x: "-100%" },
        { x: "0%", ease: "power2.inOut", duration: 1.2 },
        "-=1.2"
    )
    .fromTo(
        logo,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, ease: "power2.inOut", duration: 0.5 }
    )
    .fromTo(
        hamburger,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, ease: "power2.inOut", duration: 0.5 },
        "-=0.5"
    )
    .fromTo(
        headline,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, ease: "power2.inOut", duration: 0.5 },
        "-=0.5"
    );
