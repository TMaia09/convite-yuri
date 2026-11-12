import { initCountdown } from './countdown.js';
import { initRsvp } from './rsvp.js';

document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const openBtn = document.getElementById('open-btn');

    openBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.classList.add('visible');
            
            initCountdown('Nov 28, 2026 15:30:00');
            initRsvp();
        }, 500);
    });
});
