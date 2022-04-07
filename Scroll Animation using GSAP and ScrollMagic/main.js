gsap.registerPlugin(MotionPathPlugin);

const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    path: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -250 },
    ],
};

const tl = gsap.timeline();

tl.to(".paper-plane", {
    duration: 1,
    ease: "Power1.inOut",
    motionPath: flightPath,
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 5000,
    triggerHook: 0,
})
    .setTween(tl)
    // .addIndicators()
    .setPin(".animation")
    .addTo(controller);
