const insightsVideo = document.getElementById("insightsVideo");
const videoPlay = document.getElementById("videoPlay");
const videoTime = document.getElementById("videoTime");

if (insightsVideo && videoPlay) {

    videoPlay.addEventListener("click", () => {

        if (insightsVideo.paused) {

            insightsVideo.play();

            videoPlay.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        } else {

            insightsVideo.pause();

            videoPlay.innerHTML =
                '<i class="fa-solid fa-play"></i>';

        }

    });


    insightsVideo.addEventListener("ended", () => {

        videoPlay.innerHTML =
            '<i class="fa-solid fa-play"></i>';

    });


    insightsVideo.addEventListener("timeupdate", () => {

        const minutes = Math.floor(
            insightsVideo.currentTime / 60
        );

        const seconds = Math.floor(
            insightsVideo.currentTime % 60
        );

        videoTime.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    });

}