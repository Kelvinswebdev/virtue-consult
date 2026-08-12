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