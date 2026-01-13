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

// Force page to scroll to top on reload
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Function to open the modal
function openCRMDetails() {
    const modal = document.getElementById("project-modal");
    const body = document.getElementById("modal-body");

    // Injecting the structured content
    body.innerHTML = `
        <h2 class="accent" style="margin-bottom: 1rem;">Closed Loop CRM</h2>
        <div class="modal-grid">
            <div style="margin-bottom: 1.5rem;">
                <h4><i class="fas fa-exclamation-triangle"></i> The Problem</h4>
                <p>Modern Commercial CRMs have become over-engineered and clunky. They have evolved into tools for reporting and forecasting for management, rather than being useful tools for the person actually making the sale. For a solo entrepreneur, these systems are a distraction, not an asset.</p>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <h4><i class="fas fa-tools"></i> The Technical Solution</h4>
                <p>Independent entrepreneurs need a high-velocity solution to track leads and ROI without the administrative bloat of corporate software. They need to know two things instantly: Where is this lead in the pipeline? and What is my current ROI? I engineered a real-time system using <strong>Vanilla JS</strong> (Meta standards) for performance. Utilized <strong>Firebase Firestore</strong> for NoSQL data persistence and established a <strong>CI/CD pipeline</strong> (IBM standards).</p>
            </div>
            <div>
                <h4><i class="fas fa-chart-line"></i> The Result</h4>
                <p>I intentionally architected Closed Loop as a Mobile-First application. Solo entrepreneurs are often "on the road", meeting clients, attending events, or working remotely. By prioritizing a minimalist mobile interface, I provided a tool that fits the entrepreneur's lifestyle, allowing for "one-tap" lead management and instant pipeline visibility from anywhere. The result, a high-performance interface that reduces lead-update time by 40%, transforming complex pipelines into a minimalist, mobile-first experience.</p>
            </div>
        </div>
        <div class="modal-actions">
            <a href="https://github.com/MohiuddinKhanTushar/closed-loop-crm" target="_blank" class="modal-btn github-btn">
                <i class="fab fa-github"></i> GitHub Readme
            </a>
            <a href="https://quick-colby-d9d.notion.site/CASE-STUDY-Closed-Loop-CRM-2e7b34c9840080a1b51ae610c463b8d1?source=copy_link" target="_blank" class="modal-btn notion-btn">
                <i class="fas fa-file-alt"></i> Full Case Study
            </a>
        </div>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scroll
}

// THE FIX: Universal Close Listener
window.addEventListener('click', function(event) {
    const modal = document.getElementById("project-modal");
    
    // Check if they clicked the 'X' OR if they clicked outside the box
    if (event.target.classList.contains('close-modal') || event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore background scroll
    }
});

window.scrollTo(0, 0);