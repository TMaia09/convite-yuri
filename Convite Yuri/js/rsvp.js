export function initRsvp() {
    const form = document.getElementById('rsvp-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('guest-name').value.trim();
        const count = document.getElementById('guest-count').value;
        const message = document.getElementById('guest-message').value.trim();

        if (!name) return;

        // INSIRA SEU NUMERO DE WHATSAPP AQUI (DDI + DDD + Numero)
        const phone = "5511999999999"; 
        
        let text = `✨ *CONFIRMAÇÃO DE PRESENÇA* ✨\n\n`;
        text += `👤 *Nome:* ${name}\n`;
        text += `👥 *Acompanhantes:* ${count}\n`;
        if (message) text += `💬 *Recado:* "${message}"\n`;
        
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });
}