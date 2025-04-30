document.addEventListener('DOMContentLoaded', () => {
    const switchDesktop = document.getElementById('switch-desktop');
    const switchMobile = document.getElementById('switch-mobile');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    let lastScrollTop = 0;

    const isDarkMode = localStorage.getItem('mode') === 'dark';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // Set switch states based on saved mode
    if (switchDesktop) switchDesktop.checked = isDarkMode;
    if (switchMobile) switchMobile.checked = isDarkMode;

    // Desktop toggle
    if (switchDesktop) {
        switchDesktop.addEventListener('change', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // Mobile toggle
    if (switchMobile) {
        switchMobile.addEventListener('change', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // Scroll hide/show for desktop navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '-100px';
        }
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.getElementById("Projects Page").addEventListener("click", function () {
        window.location.href = "projects.html";
    });

    document.getElementById("Articles Page").addEventListener("click", function () {
        window.location.href = "articles.html";
    });

    document.body.classList.add("fade-in");
    window.addEventListener("beforeunload", () => {
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
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
