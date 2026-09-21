document.addEventListener("DOMContentLoaded", () => {

  const revealItems = document.querySelectorAll(
    ".vk-service-card, .vk-event-card, .vk-group-intro"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("vk-visible");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealItems.forEach((item, index) => {

    item.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;

    observer.observe(item);

  });

});