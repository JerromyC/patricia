document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Set up ScrollTrigger for each section
    const sections = document.querySelectorAll(".snap-section");

    sections.forEach((section, index) => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",    // Start the animation when the section hits the top of the viewport
                end: "bottom top",   // End the animation when the bottom of the section hits the top
                scrub: true,         // Tie the animation to the scroll position (smooth scrolling)
                // markers: false,      // Disable debugging markers
                pin: true,           // Pin the section during the scroll to simulate snap
            }
        });
    });

    // GSAP animation for opacity
    gsap.to(".face-image", {
        opacity: 1, // Fully visible at scroll
        scrollTrigger: {
            trigger: "#bio", // Trigger the animation when scrolling through the bio section
            start: "top 90%", // Start when the top of #bio hits the top of the viewport
            end: "center center", // End when the bottom of #bio hits the bottom of the viewport
            scrub: true, // Smooth animation tied to scroll position
            // markers: true, // Disable markers for debugging
            duration: "2000ms"
        }
    });

    // move image wrapper
    gsap.to(".profile-image_wrapper", {
        top: "25vh",
        right: "10vw",
        scrollTrigger: {
            trigger: "#bio", // Trigger the animation when scrolling through the bio section
            start: "top 90%", // Start when the top of #bio hits the top of the viewport
            end: "center center", // End when the bottom of #bio hits the bottom of the viewport
            scrub: true, // Smooth animation tied to scroll position
            // markers: true, // Disable markers for debugging
            duration: "2000ms"
        },
        toggleActions: "reverse none none none"
    });
});
