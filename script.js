document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('switch'); 
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleMode.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
    }

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
