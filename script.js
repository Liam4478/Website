document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    let lastScrollTop = 0;

    // Handle scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-100px'; 
        }
    });

    // Toggle mobile menu with animation and accessibility
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Dark mode toggle
    const switchInput = document.getElementById('switch');
    const body = document.body;
    if (localStorage.getItem('mode') === 'dark') {
        body.classList.add('dark-mode');
        switchInput.checked = true;
    } else {
        body.classList.remove('dark-mode');
        switchInput.checked = false;
    }
    switchInput.addEventListener('change', () => {
        if (switchInput.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });


    document.getElementById("Projects Page").addEventListener("click", function() {
         window.location.href = "projects.html";
        });

    
    document.getElementById("Articles Page").addEventListener("click", function() {
     window.location.href = "articles.html";
    });
    
           


    const showCard1Btn = document.getElementById('showCard1Btn');
    const hideCard1Btn = document.getElementById('hideCard1Btn');
    const card1 = document.getElementById('card1');
    const showCard2Btn = document.getElementById('showCard2Btn');
    const hideCard2Btn = document.getElementById('hideCard2Btn');
    const card2 = document.getElementById('card2');

    showCard1Btn.addEventListener('click', () => {
        card1.style.display = 'block';
        showCard1Btn.style.display = 'none';
    });
    hideCard1Btn.addEventListener('click', () => {
        card1.style.display = 'none';
        showCard1Btn.style.display = 'block';
    });

    showCard2Btn.addEventListener('click', () => {
        card2.style.display = 'block';
        showCard2Btn.style.display = 'none';
    });
    hideCard2Btn.addEventListener('click', () => {
        card2.style.display = 'none';
        showCard2Btn.style.display = 'block';
    });
});
