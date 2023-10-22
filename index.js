document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const revealConfig = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Adjust this if you want to trigger the animation sooner or later
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  }, revealConfig);

  sections.forEach((section) => {
    revealObserver.observe(section);
  });
});
