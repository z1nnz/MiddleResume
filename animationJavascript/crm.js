document.addEventListener("DOMContentLoaded", function () {
    const carouselCRM = document.querySelector(".carousel-crm");
    const slidesCRM = carouselCRM.querySelectorAll(".slide-crm");
    const nextBtnCRM = carouselCRM.querySelector(".next-crm");
    const prevBtnCRM = carouselCRM.querySelector(".prev-crm");
    let indexCRM = 0;
  
    function showSlideCRM(i) {
      slidesCRM.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === i);
      });
    }
  
    nextBtnCRM.addEventListener("click", () => {
      indexCRM = (indexCRM + 1) % slidesCRM.length;
      showSlideCRM(indexCRM);
    });
  
    prevBtnCRM.addEventListener("click", () => {
      indexCRM = (indexCRM - 1 + slidesCRM.length) % slidesCRM.length;
      showSlideCRM(indexCRM);
    });
  
    setInterval(() => {
      indexCRM = (indexCRM + 1) % slidesCRM.length;
      showSlideCRM(indexCRM);
    }, 5000);
  
    showSlideCRM(indexCRM);
  });
  