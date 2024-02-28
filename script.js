//Carousel Effect
let currentIndex = 0;

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlidePosition();
  }
}

function updateSlidePosition() {
  const carousel = document.querySelector('.carousel');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
