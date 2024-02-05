// Get the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        // Prevent the default link behavior
        e.preventDefault();

        // Get the target section id from the link href attribute
        const targetId = e.target.getAttribute('href').slice(1);

        // Get the target section element
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
