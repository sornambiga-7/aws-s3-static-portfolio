// ------------------------------
// Smooth Scroll for Section Links
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ------------------------------
// Fade-in Sections on Scroll
// ------------------------------
const sections = document.querySelectorAll('section');

function checkSectionVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
}

// Run on scroll
window.addEventListener('scroll', checkSectionVisibility);
// Run on page load
checkSectionVisibility();

// ------------------------------
// Simple Contact Form Validation
// ------------------------------
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual submission

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // If all fields are filled
    alert('Thank you, ' + name + '! Your message has been received.');
    form.reset(); // reset the form
});