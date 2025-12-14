function AnimacionCopos() {
    const copo = document.createElement('div');
    copo.classList.add('snowflake');
    copo.textContent = '❄';
    // Posición horizontal aleatoria
    copo.style.left = Math.random() * window.innerWidth + 'px';
    // Tamaño aleatorio
    copo.style.fontSize = (Math.random() * 20 + 10) + 'px';
    // Duración aleatoria de la caída
    copo.style.animationDuration = (Math.random() * 5 + 5) + 's';
    // Añadir al body
    document.body.appendChild(copo);
    // Remover después de la animación
    setTimeout(() => copo.remove(), parseFloat(copo.style.animationDuration) * 1000);
}


// Ejecutar animacion Copos de Nieve cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setInterval(AnimacionCopos, 200);
});


// ------------------- Cuenta Regresiva ------------------- 
function UpdateCount() {
    const Christmas = new Date(new Date().getFullYear(), 11, 14, 16, 35, 0);
    const HoraActual = new Date();
    const cregresiva = Christmas - HoraActual;
    const dias = Math.floor(cregresiva / (1000 * 60 * 60 * 24));
    const horas = Math.floor((cregresiva / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((cregresiva / (1000 * 60)) % 60);
    const segundos = Math.floor((cregresiva / 1000) % 60);
    
    if (cregresiva <= 0) {
        document.getElementById("SantaIcon").innerHTML = "🎅";
        document.getElementById("Mensaje-Titulo").innerHTML = "🎄 Mensaje Navideño ✨";
        document.getElementById("Mensaje-Contenido").innerHTML = "Que esta Navidad esté llena de luz, alegría y momentos especiales junto a tus seres queridos.";
        document.getElementById("Festejo").innerHTML = "🎉 ¡Feliz Navidad a Todos! 🎉";
        return;
    }

    document.getElementById("Festejo").innerHTML =
        `${dias} días : ${horas} horas : ${minutos} minutos : ${segundos} segundos `;
}

setInterval(UpdateCount, 1000);
UpdateCount();

// -------------------MUSICA NAVIDEÑA----------------------
/*function PlayMusic() {
    const musica = document.getElementById("Music");
    musica.volume = 0.5; // volumen medio
    musica.play();
}*/

const musica = document.getElementById("Music");
const playPauseBtn = document.getElementById('BotonMusic');
let isPlaying = false;
function togglePlayPause() {
    if (isPlaying) {
        // Si está reproduciendo, pausar
        musica.pause();
        playPauseBtn.textContent = '🎶 Iniciar Música Navideña';
        isPlaying = false;
    } else {
        // Si está pausado, reproducir
        musica.volume = 0.5;
        musica.play();
        playPauseBtn.textContent = '🎶 Pausar Música Navideña';
        isPlaying = true;
    }
}
playPauseBtn.addEventListener('click', togglePlayPause);
musica.addEventListener('ended', () => {
    playPauseBtn.textContent = '🎶 Iniciar Música Navideña';
    isPlaying = false;
});


