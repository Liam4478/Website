document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.getElementById('switch');
    const body = document.body;

    // Check localStorage for mode preference
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
