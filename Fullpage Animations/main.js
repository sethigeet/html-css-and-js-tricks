new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = gsap.timeline({ delay: 0.5 });
        tl.fromTo(
            title,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        );
        if (destination.index === 1) {
            const chairs = document.querySelectorAll(".chair");
            const description = document.querySelector(".description");
            tl.fromTo(chairs, { x: "100%" }, { x: "-40%", duration: 0.7 })
                .fromTo(
                    description,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.5"
                )
                .fromTo(
                    chairs[0],
                    { opacity: 0 },
                    { opacity: 1, duration: 2.5 }
                )
                .fromTo(
                    chairs[1],
                    { opacity: 0 },
                    { opacity: 1, duration: 2.5 }
                )
                .fromTo(
                    chairs[2],
                    { opacity: 0 },
                    { opacity: 1, duration: 2.5 }
                );
        }
    },
});
