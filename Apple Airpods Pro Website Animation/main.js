// TOP SECTION
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// END SECION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0,
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);

// TEXT ANIMATION
const textAnim = gsap.fromTo(text, { opacity: 1 }, { opacity: 0, duration: 3 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})
    .setTween(textAnim)
    .addTo(controller);

// VIDEO ANIMATION
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", (e) => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;

    video.currentTime = delay;
}, 33.3);
