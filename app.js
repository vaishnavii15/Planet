const faders = document.querySelectorAll('.fade-in');

const sliders = document.querySelectorAll('.slide-in');

const apperOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
        apperOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});