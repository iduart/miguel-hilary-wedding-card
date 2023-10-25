document.addEventListener("DOMContentLoaded", function () {
  /**
   * sound
   */

  var song = document.getElementById("song");
  var audioSection = document.getElementById("audio-section");
  var soundOn = document.getElementById("sound-on");
  var soundOff = document.getElementById("sound-off");

  audioSection.addEventListener("click", function (event) {
    songControls();
    event.stopPropagation();
    event.preventDefault();
  });

  function songControls() {
    const isPlaying = !song.paused;
    if (isPlaying) {
      soundOff.classList.remove("hide");
      soundOn.classList.add("hide");

      song.pause();
    } else {
      soundOff.classList.add("hide");
      soundOn.classList.remove("hide");

      song.play();
    }
  }

  /**
   * Envelop
   */
  var envelope = document.getElementById("envelope");
  var btnOpen = document.getElementById("open-letter");
  var btnClose = document.getElementById("close-letter");

  btnOpen.addEventListener("click", function () {
    open();
  });
  btnClose.addEventListener("click", function () {
    close();
  });

  function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
    soundOff.classList.add("hide");
    soundOn.classList.remove("hide");
    btnOpen.classList.add("conceal");
    song.play();
  }
  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
    soundOff.classList.remove("hide");
    soundOn.classList.add("hide");
    btnOpen.classList.remove("conceal");
    song.pause();
  }

  /**
   * Slider
   */
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
