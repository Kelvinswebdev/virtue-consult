const videos = document.querySelectorAll(".hero-video");

const indicators = document.querySelectorAll(".indicator");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const title = document.getElementById("hero-title");
const description = document.getElementById("hero-description");


const slides = [

    {
        title: "Building Businesses<br>That Last.",

        description:
            "We help organizations make better decisions, strengthen their operations and create sustainable growth."
    },

    {
        title: "Strategy That<br>Moves Forward.",

        description:
            "Turning complex challenges into clear strategies that create measurable business impact."
    },

    {
        title: "Creating Growth<br>With Purpose.",

        description:
            "We work with ambitious organizations to build stronger brands, systems and sustainable futures."
    }

];


let currentSlide = 0;

let slideTimer;

const slideDuration = 6000;


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    currentSlide = index;

    videos.forEach((video, i) => {

        video.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    indicators.forEach((indicator, i) => {

        indicator.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    title.innerHTML = slides[currentSlide].title;

    description.textContent =
        slides[currentSlide].description;


    videos[currentSlide].currentTime = 0;

    videos[currentSlide].play()
        .catch(() => {});


    resetTimer();

}


/* =========================
   NEXT
========================= */

function nextSlide() {

    let next =
        (currentSlide + 1) % videos.length;

    showSlide(next);

}


/* =========================
   PREVIOUS
========================= */

function previousSlide() {

    let previous =
        (currentSlide - 1 + videos.length)
        % videos.length;

    showSlide(previous);

}


/* =========================
   TIMER
========================= */

function resetTimer() {

    clearTimeout(slideTimer);

    slideTimer = setTimeout(
        nextSlide,
        slideDuration
    );

}


/* =========================
   BUTTONS
========================= */

nextButton.addEventListener(
    "click",
    nextSlide
);


prevButton.addEventListener(
    "click",
    previousSlide
);


/* =========================
   INDICATORS
========================= */

indicators.forEach(
    (indicator, index) => {

        indicator.addEventListener(
            "click",
            () => showSlide(index)
        );

    }
);


/* =========================
   VIDEO END
========================= */

videos.forEach(video => {

    video.addEventListener(
        "ended",
        nextSlide
    );

});


/* =========================
   START
========================= */

showSlide(0);







/* =========================
   NUMBER COUNTERS
========================= */

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(
                counter.getAttribute("data-count")
            );

            let current = 0;

            const duration = 1800;

            const startTime = performance.now();


            function updateCounter(currentTime) {

                const progress =
                    Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                const ease =
                    1 - Math.pow(1 - progress, 3);

                current = Math.floor(target * ease);

                counter.textContent = current;

                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            }

            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach(counter => {
    counterObserver.observe(counter);
});









/* =========================
   PERSPECTIVE REVEAL
========================= */

const perspectiveSection =
    document.querySelector(".perspective-section");


const perspectiveElements = [
    perspectiveSection.querySelector(".perspective-mark"),
    perspectiveSection.querySelector("h2"),
    perspectiveSection.querySelector(".perspective-right")
];


perspectiveElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";

});


const perspectiveObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;


                perspectiveElements.forEach(
                    (element, index) => {

                        setTimeout(() => {

                            element.style.opacity = "1";

                            element.style.transform =
                                "translateY(0)";

                        }, index * 180);

                    }
                );


                perspectiveObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.25
        }
    );


perspectiveObserver.observe(
    perspectiveSection
);















const vmElements = document.querySelectorAll(
    ".vm-heading, .vm-header > p, .vm-card, .vm-image"
);

const vmObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                vmObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


vmElements.forEach((element, index) => {

    element.style.transitionDelay = `${index * 0.08}s`;

    vmObserver.observe(element);

});


document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SCROLL REVEAL ANIMATIONS
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });



    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters = document.querySelectorAll("[data-count]");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(
                    counter.getAttribute("data-count")
                );

                let current = 0;

                const duration = 1800;

                const startTime = performance.now();


                function updateCounter(currentTime) {

                    const elapsed =
                        currentTime - startTime;

                    const progress =
                        Math.min(elapsed / duration, 1);


                    // Smooth easing
                    const easedProgress =
                        1 - Math.pow(1 - progress, 3);


                    current =
                        Math.floor(
                            easedProgress * target
                        );


                    counter.textContent = current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent = target;

                    }

                }


                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach(counter => {
        counterObserver.observe(counter);
    });



    /* ==========================================
       STAGGERED REVEAL DELAYS
    ========================================== */

    const delayElements =
        document.querySelectorAll(
            ".delay-1, .delay-2, .delay-3"
        );


    delayElements.forEach(element => {

        if (element.classList.contains("delay-1")) {
            element.style.transitionDelay = "0.15s";
        }

        if (element.classList.contains("delay-2")) {
            element.style.transitionDelay = "0.30s";
        }

        if (element.classList.contains("delay-3")) {
            element.style.transitionDelay = "0.45s";
        }

    });

});



