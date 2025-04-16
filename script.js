document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('toggle-mode');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    // Check localStorage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleMode.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
    }

    // Toggle dark mode and save preference in localStorage
    toggleMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Toggle mobile menu visibility
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
});
