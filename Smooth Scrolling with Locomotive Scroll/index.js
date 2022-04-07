import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 2,
});

//* refer to the docs for all the options
//* https://github.com/locomotivemtl/locomotive-scroll
