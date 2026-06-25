// js/acessibilidade.js

/* ==============================================================
   Item 5.11 da ABNT NBR 17225 - Uso de Cores (Alto Contraste)
   ============================================================== */
const btnContraste = document.getElementById('btn-contraste');

btnContraste.addEventListener('click', () => {
    // Adiciona ou remove a classe que aplica o tema escuro/amarelo
    document.body.classList.toggle('alto-contraste');
});

/* ==============================================================
   Item 5.12 da ABNT NBR 17225 - Conteúdo Textual (Zoom)
   A norma exige que o texto possa ser redimensionado em até 200%
   ============================================================== */
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// O tamanho padrão da fonte base do HTML é 100%
let nivelZoom = 100; 

btnAumentar.addEventListener('click', () => {
    // Trava o aumento em 200% conforme limite da norma 5.12.7
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
