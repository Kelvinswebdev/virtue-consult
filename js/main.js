// const pageKey = document.body.dataset.page;
// const navMap = {
//   home: "index.html",
//   about: "about.html",
//   construction: "construction-engineering.html",
//   consulting: "consulting-professional.html",
//   projects: "projects.html",
//   contact: "contact.html"
// };

// const nav = document.querySelector(".site-nav");
// const toggle = document.querySelector(".menu-toggle");

// function closeNav() {
//   if (nav && toggle) {
//     nav.classList.remove("open");
//     toggle.setAttribute("aria-expanded", "false");
//     document.body.classList.remove("menu-open");
//   }
// }

// if (toggle && nav) {
//   toggle.addEventListener("click", (event) => {
//     event.stopPropagation();
//     const isOpen = nav.classList.toggle("open");
//     toggle.setAttribute("aria-expanded", String(isOpen));
//     document.body.classList.toggle("menu-open", isOpen);
//   });

//   document.addEventListener("click", (event) => {
//     if (nav.classList.contains("open") && !nav.contains(event.target)) {
//       closeNav();
//     }
//   });

//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeNav();
//     }
//   });

//   nav.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", closeNav);
//   });
// }

// if (navMap[pageKey]) {
//   document.querySelectorAll(".site-nav a").forEach((link) => {
//     const href = link.getAttribute("href");
//     if (href === navMap[pageKey]) {
//       link.classList.add("active");
//     }
//   });
// }

// const items = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
// items.forEach((item, index) => {
//   item.style.setProperty("--delay", `${Math.min(index * 70, 420)}ms`);
// });

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("in");
//       }
//     });
//   },
//   { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
// );

// items.forEach((item) => observer.observe(item));

// const yearEl = document.getElementById("year");
// if (yearEl) {
//   yearEl.textContent = new Date().getFullYear();
// }

// const flipCards = document.querySelectorAll(".flip-card");
// flipCards.forEach((card) => {
//   card.addEventListener("click", () => {
//     card.classList.toggle("is-flipped");
//   });

//   card.addEventListener("keydown", (event) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       card.classList.toggle("is-flipped");
//     }
//   });
// });

// const projectFlipCards = document.querySelectorAll(".project-flip-card");
// projectFlipCards.forEach((card) => {
//   card.addEventListener("click", () => {
//     card.classList.toggle("is-flipped");
//   });

//   card.addEventListener("keydown", (event) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       card.classList.toggle("is-flipped");
//     }
//   });
// });
