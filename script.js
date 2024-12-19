function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Fonction pour activer le défilement fluide
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le défilement instantané

        // Sélectionne l'élément de la section ciblée
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Défilement fluide vers la section ciblée
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});