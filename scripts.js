/// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Close the dropdown menu on link click
            if (navLinksContainer.classList.contains('open')) {
                navLinksContainer.classList.remove('open');
            }
        });
    });

    // Toggle dropdown menu
    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
    });

    // Hero content fade-in animation
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s, transform 1s';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 100);

    // Animation for service cards on scroll
    const serviceCards = document.querySelectorAll('.service-cards .card');

    const animateOnScroll = () => {
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight - 50) {
                card.style.transition = 'transform 0.5s, opacity 0.5s';
                card.style.transform = 'translateY(0)';
                card.style.opacity = 1;
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);

    // Initialize the service cards to be hidden initially
    serviceCards.forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = 0;
    });

    animateOnScroll(); // Trigger animation on load if cards are already in view
});
