// Function to handle diverse screen sizes
function handleScreenSize() {
    const screenWidth = window.innerWidth;

    // Example: Adjusting the number of columns in a grid based on screen width
    const gridContainer = document.querySelector('.grid-container');
    if (screenWidth < 768) {
        // Small screens (e.g., mobile)
        gridContainer.style.gridTemplateColumns = '1fr'; // Adjust as needed
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        // Medium screens (e.g., tablets)
        gridContainer.style.gridTemplateColumns = '1fr 1fr'; // Adjust as needed
    } else {
        // Large screens (e.g., desktops)
        gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr'; // Adjust as needed
    }

    // Add more adjustments as needed based on screen size
}

// Call the function initially to handle the screen size on page load
handleScreenSize();

// Listen for window resize events to handle changes in screen size
window.addEventListener('resize', handleScreenSize);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Return to top button functionality
const returnToTopButton = document.getElementById('return-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        returnToTopButton.style.display = 'block';
    } else {
        returnToTopButton.style.display = 'none';
    }
});

returnToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Handling form submission for the newsletter
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (isValidEmail(email)) {
        // Process the email (e.g., send it to the server)
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    } else {
        alert('Please provide a valid email address.');
    }
});

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
