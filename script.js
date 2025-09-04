const toggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});