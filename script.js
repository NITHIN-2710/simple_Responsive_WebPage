// Mobile menu toggle functionality
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove("active");
        }
    });
});

// Adjust layout on window resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
    }
});
