document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Mensajes para las cartas
    const messages = [
        "Eres la razón de mi felicidad 💖",
        "Gracias por estar siempre a mi lado",
        "Tu sonrisa ilumina mi vida ✨",
        "Te quiero mucho mi loca💫",
        "Y finalmente... ¿Quieres ser mi San Valentín? 💌"
    ];

    // Asignar eventos a cada carta
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Si la carta ya está abierta, no hacer nada
            if (card.classList.contains('flip')) return;

            // Cargar el mensaje en la parte trasera antes de voltear la carta
            const back = card.querySelector('.back');
            back.textContent = messages[index];

            // Voltear la carta
            card.classList.add('flip');
            
            // Mostrar la animación en la parte trasera del mensaje
            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("¡CON CARIÑO TU NIÑO DRAMATICO! ❤️");
                }, 800);
            }
        });
    });

    // Crear la lluvia de corazones
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;  // Duración aleatoria entre 2 y 4 segundos
        document.querySelector('.heart-rain').appendChild(heart);

        // Eliminar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Generar corazones a intervalos aleatorios
    setInterval(createHeart, 300);
});
