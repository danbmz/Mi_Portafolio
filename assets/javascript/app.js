const formulario = document.querySelector('.formulario');
const agradecimientoDiv = document.querySelector('.verificado__container');
const titulo_contacto = document.querySelector('.contacto__titulo');
const descripcion = document.querySelector('.contacto__descripcion');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    // Oculta el formulario y muestra el mensaje de agradecimiento
    formulario.style.display = 'none';
    titulo_contacto.style.display = 'none';
    descripcion.style.display = 'none';
    agradecimientoDiv.style.display = 'flex';
});