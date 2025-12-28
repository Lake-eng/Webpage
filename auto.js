const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  let current = 0;
  let slideInterval = setInterval(nextSlide, 10000); // Auto-play every 5s

  function nextSlide() {
    slides[current].style.opacity = 0;
    current = (current + 1) % slides.length;
    slides[current].style.opacity = 1;
  }

  nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
  });
