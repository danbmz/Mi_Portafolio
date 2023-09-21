const formulario = document.querySelector('.formulario');
const agradecimientoDiv = document.querySelector('.verificado__container');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    // Oculta el formulario y muestra el mensaje de agradecimiento
    formulario.style.display = 'none';
    agradecimientoDiv.style.display = 'flex';
});