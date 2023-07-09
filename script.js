// Animation on Scroll using GSAP
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    gsap.fromTo(section, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'easeInOut'});
});
