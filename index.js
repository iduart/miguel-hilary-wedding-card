document.addEventListener("DOMContentLoaded", function () {
  //   const sections = document.querySelectorAll(".section");

  //   const revealConfig = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.1, // Adjust this if you want to trigger the animation sooner or later
  //   };

  //   const revealObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("reveal");
  //       }
  //     });
  //   }, revealConfig);

  //   sections.forEach((section) => {
  //     revealObserver.observe(section);
  //   });

  // Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slider-image");
  const dots = document.querySelectorAll(".dot");

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    dots[currentSlide].classList.remove("active");

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Show the first slide initially
  showSlide(currentSlide);

  // Autoplay functionality
  const slideInterval = setInterval(nextSlide, 3000); // Change 3000ms (3 seconds) to your desired autoplay interval

  // Dot navigation functionality
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });
});
