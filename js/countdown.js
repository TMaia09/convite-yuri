export function initCountdown(targetDateStr) {
    const targetTime = new Date(targetDateStr).getTime();
    
    const elements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    function update() {
        const now = Date.now();
        const gap = targetTime - now;

        if (gap < 0) return;

        elements.days.innerText = String(Math.floor(gap / 86400000)).padStart(2, '0');
        elements.hours.innerText = String(Math.floor((gap % 86400000) / 3600000)).padStart(2, '0');
        elements.minutes.innerText = String(Math.floor((gap % 3600000) / 60000)).padStart(2, '0');
        elements.seconds.innerText = String(Math.floor((gap % 60000) / 1000)).padStart(2, '0');
    }

    setInterval(update, 1000);
    update();
}
