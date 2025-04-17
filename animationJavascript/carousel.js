document.addEventListener("DOMContentLoaded", function () {
  const carousel2 = document.querySelector(".carousel-2");
  const slides2 = carousel2.querySelectorAll(".slide-2");
  const nextBtn2 = carousel2.querySelector(".next-btn-2");
  const prevBtn2 = carousel2.querySelector(".prev-btn-2");
  let index2 = 0;

  function showSlide2(i) {
    slides2.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
    });
  }

  nextBtn2.addEventListener("click", () => {
    index2 = (index2 + 1) % slides2.length;
    showSlide2(index2);
  });

  prevBtn2.addEventListener("click", () => {
    index2 = (index2 - 1 + slides2.length) % slides2.length;
    showSlide2(index2);
  });

  setInterval(() => {
    index2 = (index2 + 1) % slides2.length;
    showSlide2(index2);
  }, 4000);

  showSlide2(index2);
});
        
          
       
const buttons = document.querySelectorAll(".exp-btn");
const contents = document.querySelectorAll(".exp-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // 清除選取樣式
    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    // 顯示對應內容
    const target = button.getAttribute("data-target");
    contents.forEach(content => {
      content.style.display = content.id === target ? "block" : "none";
    });
  });
});

        
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// 自動播放
setInterval(() => {
  nextSlide();
}, 4000);
