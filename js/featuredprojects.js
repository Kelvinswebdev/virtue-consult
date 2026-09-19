/* =========================================
   PROJECT VIDEO
========================================= */

const projectVideo = document.getElementById("projectVideo");
const videoPlay = document.getElementById("videoPlay");

videoPlay.addEventListener("click", () => {

  if (projectVideo.paused) {

    projectVideo.play();

    videoPlay.classList.add("playing");

  } else {

    projectVideo.pause();

    videoPlay.classList.remove("playing");

  }

});


/* =========================================
   PROJECT GALLERY MODAL
========================================= */

const openGallery = document.getElementById("openGallery");
const closeGallery = document.getElementById("closeGallery");
const projectModal = document.getElementById("projectModal");
const modalOverlay = document.querySelector(".fp-modal-overlay");


function openProjectGallery() {

  projectModal.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeProjectGallery() {

  projectModal.classList.remove("active");

  document.body.style.overflow = "";

}


openGallery.addEventListener(
  "click",
  openProjectGallery
);


closeGallery.addEventListener(
  "click",
  closeProjectGallery
);


modalOverlay.addEventListener(
  "click",
  closeProjectGallery
);


/* ESC key */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeProjectGallery();
  }

});