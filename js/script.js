// script.js
document.getElementById('year').textContent = new Date().getFullYear();

// Si quieres que el botón de carta muestre aviso si falta el archivo:
const clink = document.getElementById('download-cl');
clink.addEventListener('click', function(e){
    // Si el href es todavía el placeholder, prevenir y avisar
    if (clink.getAttribute('href').includes('assets/docs/cover_letter.pdf')){
        e.preventDefault();
        alert('Aún no has subido la carta. Copia tu carta en assets/docs/cover_letter.pdf para habilitar la descarga.');
    }
});
// Dark / Light Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});

