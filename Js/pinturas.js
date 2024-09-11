let pinturas = [];

fetch("./js/pinturas.json")
    .then(response => response.json())
    .then(data => {
        pinturas = data;
        crearTarjetasPinturas();
    });

const contenedorFavoritosAgregados = JSON.parse(localStorage.getItem('favoritosGuardados')) || [];

const contendorTarjetas = document.querySelector('#pinturas');
function crearTarjetasPinturas() {
    contendorTarjetas.innerHTML = "";
    pinturas.forEach(pintura => {
        const nuevaPintura = document.createElement("div");
        nuevaPintura.classList = "tarjeta-api";
        nuevaPintura.setAttribute("data-aos", "fade-up");
        nuevaPintura.setAttribute("data-aos-duration", "3000");
        nuevaPintura.setAttribute("data-aos-anchor-placement", "bottom-bottom");
        nuevaPintura.innerHTML = `
        <img src="assets/imagenes/${pintura.id}.jpg" class="imagen-pintura">
        <h3>${pintura.nombre}</h3>
        <p>${pintura.autor}</p>
        <button class="favoritos">Agregar a Favoritos</button>
    `;
        contendorTarjetas.appendChild(nuevaPintura);
    });

    const btnFavoritos = document.querySelectorAll('.favoritos');
    btnFavoritos.forEach(favorito => {
        favorito.addEventListener('click', () => {
            const cajaContenedora = favorito.parentNode;
            const contenidoHTML = cajaContenedora.outerHTML;
            const obraExistente = contenedorFavoritosAgregados.find(obra => obra.contenidoHTML === contenidoHTML);
            if (!obraExistente) {
                const imagen = cajaContenedora.querySelector('img').src;
                const rutaImagen = imagen.replace('http://127.0.0.1:5501', '..');
                const titulo = cajaContenedora.querySelector('h3').textContent;
                const autor = cajaContenedora.querySelector('p').textContent;

                const obra = {
                    rutaImagen,
                    titulo,
                    autor,
                    contenidoHTML
                };

                contenedorFavoritosAgregados.push(obra);
                localStorage.setItem('favoritosGuardados', JSON.stringify(contenedorFavoritosAgregados));
            }
        });
    });
}
