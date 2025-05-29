const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel img');
let current = 0;

setInterval(() => {
    current = (current + 1) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
}, 3000);

function atualizarContador() {
    const inicio = new Date('2024-12-27T22:00:00');
    const agora = new Date();

    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('tempo').textContent = 
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();