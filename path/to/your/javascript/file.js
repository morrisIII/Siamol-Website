// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select the navigation toggle button and the navigation element
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');

    // Check if elements exist before adding listeners
    if (navToggle && nav) {
        // Add a click event listener to the toggle button
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });

        // Close the menu when a link is clicked
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});