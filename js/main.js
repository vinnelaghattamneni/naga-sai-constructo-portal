// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add header background on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  }
});

// Add animation to feature cards on scroll
const observeElements = (elements, className) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
};

// Observe feature cards and product cards
document.addEventListener('DOMContentLoaded', () => {
  const featureCards = document.querySelectorAll('.feature-card');
  const productCards = document.querySelectorAll('.product-card');
  
  observeElements(featureCards, 'animate-fade-up');
  observeElements(productCards, 'animate-fade-up');
});