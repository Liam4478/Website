document.addEventListener('DOMContentLoaded', () => {
    const switchDesktop = document.getElementById('switch-desktop');
    const switchMobile = document.getElementById('switch-mobile');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    let lastScrollTop = 0;


    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    if (switchDesktop) switchDesktop.checked = savedMode === 'dark';
    if (switchMobile) switchMobile.checked = savedMode === 'dark';

    const toggleMode = () => {
        const isNowDark = !body.classList.contains('dark-mode');
        body.classList.toggle('dark-mode', isNowDark);
        body.classList.toggle('light-mode', !isNowDark);
        localStorage.setItem('mode', isNowDark ? 'dark' : 'light');
    };

    if (switchDesktop) {
        switchDesktop.addEventListener('change', toggleMode);
    }

    if (switchMobile) {
        switchMobile.addEventListener('change', toggleMode);
    }

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.remove('slide-down');
            navbar.classList.add('fade-out');
        } else {
            navbar.classList.remove('fade-out');
            navbar.classList.add('slide-down');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

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

    window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenu.style.maxHeight = null;
            mobileMenu.style.padding = null;
        }

        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
