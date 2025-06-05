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

document.getElementById('btnMostrar').onclick = function () {
    document.getElementById('btnMostrar').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
};

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    let left;
    if (Math.random() < 0.6) {
        left = 40 + Math.random() * 20;
    } else {
        left = Math.random() * 100;
    }
    heart.style.left = left + 'vw';
    heart.style.top = '-30px';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';

    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6">
            <path fill="#e91e63" d="M23.6,0c-2.7,0-5.1,1.3-6.6,3.3C15.5,1.3,13.1,0,10.4,0C4.7,0,0,4.7,0,10.4
            c0,6.1,5.6,11.1,14.1,18.7c0.6,0.5,1.5,0.5,2.1,0C26.4,21.5,32,16.5,32,10.4C32,4.7,27.3,0,23.6,0z"/>
        </svg>
    `;

    document.getElementById('hearts-bg').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 150);

setInterval(atualizarContador, 1000);
atualizarContador();