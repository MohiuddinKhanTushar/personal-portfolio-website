// Function to initialize everything
function initPortfolio() {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50, // Triggers slightly earlier for a smoother feel
        disable: false 
    });

    // 2. Force AOS to detect the "Word by Word" spans immediately on load
    setTimeout(() => {
        AOS.refresh();
    }, 100);

    // 3. Initialize Particles background
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ff7300" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": { "enable": true, "distance": 150, "color": "#ff7300", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "detect_on": "window",
            "events": { 
                "onhover": { 
                    "enable": true, 
                    "mode": "repulse"  // Changed from "grab" to "repulse"
                }, 
                "onclick": {
                    "enable": true,
                    "mode": "push"    // Adds particles when you click
                },
                "resize": true 
            },
            "modes": {
                "repulse": {
                    "distance": 120,   // How far the particles move away
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}

// 4. Scroll Listener (Placed outside to keep the init function lean)
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero-section');
    if (!hero) return; // Safety check

    const scrollPosition = window.scrollY;

    // Fades out hero section as you move down the page
    if (scrollPosition > 150) { 
        hero.classList.add('hero-fade-out');
    } else {
        hero.classList.remove('hero-fade-out');
    }
});

// Run everything when the window is fully loaded
window.addEventListener('load', initPortfolio);

// Toggle Mobile Menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked (so it doesn't stay open over the section)
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active');
    menuLinks.classList.remove('active');
}));