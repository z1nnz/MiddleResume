window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel-silver").forEach((carousel) => {
      const slides = carousel.querySelectorAll(".slide-silver");
      const nextBtn = carousel.querySelector(".next-silver");
      const prevBtn = carousel.querySelector(".prev-silver");
      let index = 0;
  
      function showSlide(i) {
        slides.forEach((slide, idx) => {
          slide.classList.toggle("active", idx === i);
        });
      }
  
      if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener("click", () => {
          index = (index + 1) % slides.length;
          showSlide(index);
        });
  
        prevBtn.addEventListener("click", () => {
          index = (index - 1 + slides.length) % slides.length;
          showSlide(index);
        });
  
        setInterval(() => {
          index = (index + 1) % slides.length;
          showSlide(index);
        }, 5000);
  
        showSlide(index);
      }
    });
  });
  