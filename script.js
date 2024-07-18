let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const bubbles = document.querySelectorAll(".bubble");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;

  bubbles.forEach((bubble, idx) => {
    bubble.classList.toggle("active", idx === currentIndex);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

setInterval(nextSlide, 3000); // Muda para o próximo slide a cada 3 segundos

// Iniciar o carrossel
showSlide(currentIndex);
