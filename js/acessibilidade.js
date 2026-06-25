// js/acessibilidade.js
const btnContraste = document.getElementById('btn-contraste');

btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let nivelZoom = 100; 

btnAumentar.addEventListener('click', () => {
    if (nivelZoom < 200) {
        nivelZoom += 20;
        document.documentElement.style.fontSize = nivelZoom + '%';
    }
});

btnDiminuir.addEventListener('click', () => {
    if (nivelZoom > 60) {
        nivelZoom -= 20;
        document.documentElement.style.fontSize = nivelZoom + '%';
    }
});
