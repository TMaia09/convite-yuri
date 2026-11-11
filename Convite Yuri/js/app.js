import { initCountdown } from './countdown.js';
import { initRsvp } from './rsvp.js';

document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const openBtn = document.getElementById('open-btn');

    // Senha de segurança opcional para liberar o acesso ao convite
    const SENHA_CONVITE = "yuri2026"; 

    openBtn.addEventListener('click', () => {
        const senhaDigitada = prompt("Digite a senha do convite enviada no WhatsApp:");

        if (senhaDigitada === null) return; // Cancelou

        if (senhaDigitada.trim() === SENHA_CONVITE) {
            welcomeScreen.classList.add('fade-out');
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                mainContent.classList.add('visible');
                
                initCountdown('Nov 28, 2026 15:30:00');
                initRsvp();
            }, 500);
        } else {
            alert("Senha incorreta! Verifique a senha enviada junto com o convite.");
        }
    });
});