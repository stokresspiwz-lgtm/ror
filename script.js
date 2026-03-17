// Ambil element yang mau di-update
const serverCount = document.getElementById('server-count');
const userCount = document.getElementById('user-count');
const cpuUsage = document.getElementById('cpu-usage');
const serverList = document.getElementById('servers');

// Fungsi buat random angka
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update stats setiap 3 detik (biar keliatan hidup)
setInterval(() => {
    serverCount.textContent = randomInt(3, 8);
    userCount.textContent = randomInt(10, 25);
    cpuUsage.textContent = randomInt(20, 80) + '%';

    // Update status server random
    const serverItems = serverList.getElementsByTagName('li');
    for (let i = 0; i < serverItems.length; i++) {
        const statusSpan = serverItems[i].querySelector('.status');
        if (Math.random() > 0.7) { // 30% chance offline
            statusSpan.className = 'status offline';
            statusSpan.textContent = 'Offline';
        } else {
            statusSpan.className = 'status online';
            statusSpan.textContent = 'Online';
        }
    }
}, 3000);

// Efek typing di console (biar keliatan keren aja)
console.log('%c🦖 Pterodactyl Panel Mini', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%cDibuat dengan 🔥 buat tugas lo, bro!', 'color: #a0a8c0; font-size: 12px;');

// Alert kalo pertama kali di-load (opsional)
window.onload = () => {
    setTimeout(() => {
        alert('Selamat datang di Pterodactyl Panel Mini!\nIni cuma simulasi buat tugas ya, bro.');
    }, 500);
};
