document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    const dropdown = document.querySelector(".nav-dropdown");
    const dropdownTrigger =
        document.querySelector(".dropdown-trigger");


    /* =========================================
       NAVBAR SCROLL
    ========================================= */

    function updateHeader() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);


    /* =========================================
       MOBILE MENU
    ========================================= */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                mainNav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });

    }


    /* =========================================
       EXPERTISE DROPDOWN
       CLICK TO OPEN — DESKTOP & MOBILE
    ========================================= */

    if (dropdown && dropdownTrigger) {

        dropdownTrigger.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    dropdown.classList.toggle("open");

                dropdownTrigger.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );

    }


    /* =========================================
       CLOSE MENU WHEN LINK IS CLICKED
    ========================================= */

    const navLinks =
        document.querySelectorAll(
            ".main-nav a:not(.dropdown-trigger)"
        );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 850) {

                if (mainNav) {
                    mainNav.classList.remove("active");
                }

                if (menuToggle) {
                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

                document.body.classList.remove(
                    "menu-open"
                );

            }

        });

    });


    /* =========================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        if (
            dropdown &&
            !dropdown.contains(event.target)
        ) {

            dropdown.classList.remove("open");

            if (dropdownTrigger) {

                dropdownTrigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });


    /* =========================================
       RESET MOBILE NAV WHEN RESIZING
    ========================================= */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            if (dropdown) {
                dropdown.classList.remove("open");
            }

            if (dropdownTrigger) {

                dropdownTrigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            document.body.classList.remove(
                "menu-open"
            );

        }

    });

});