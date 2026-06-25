// js/acessibilidade.js
const btnContraste = document.getElementById('btn-contraste');

btnContraste.addEventListener('click', () => {
    // Adiciona ou remove a classe que aplica o tema escuro/amarelo
    document.body.classList.toggle('alto-contraste');
});

const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

let nivelZoom = 100; 

btnAumentar.addEventListener('click', () => {
    if (nivelZoom < 200) {
        nivelZoom += 20;
        // Altera o font-size do <html>. Como usamos 'rem' no CSS, 
        // a página inteira escala harmonicamente sem quebrar o layout.
        document.documentElement.style.fontSize = nivelZoom + '%';
    }
});

btnDiminuir.addEventListener('click', () => {
    if (nivelZoom > 60) {
        nivelZoom -= 20;
        document.documentElement.style.fontSize = nivelZoom + '%';
    }
});
