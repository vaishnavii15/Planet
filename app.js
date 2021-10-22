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





function scrollpage() {
    function f() {
        window.scrollTo(0, i);
        if (status == 0) {
            i = i + 1;
            if (i >= Height) { status = 1; }
        }
        setTimeout(f, 0.05);
    } f();
}
var Height = document.documentElement.scrollHeight;
var i = 1, j = Height, status = 0;
scrollpage()