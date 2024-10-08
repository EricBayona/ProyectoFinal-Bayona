const favoritosGuardados = JSON.parse(localStorage.getItem('favoritosGuardados')) || [];


function crearTarjetasFavoritos() {
    const contenedorFavoritos = document.querySelector('#contenedor-favoritos');
    const mensajeError = document.querySelector('#mensaje-error');

    if (favoritosGuardados.length === 0) {
        mensajeError.style.display = 'block';
    } else {
        mensajeError.style.display = 'none';
    }
    
    favoritosGuardados.forEach(favorito => {
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.classList.add('tarjeta-ObrasDeArte'); 
        nuevaTarjeta.innerHTML = `
            <img src="${favorito.rutaImagen}"/>
            <h3>${favorito.titulo}</h3>
            <p>${favorito.autor}</p>
            <div>
                <button class="eliminar-favoritos">Eliminar de Favoritos</button>
            </div>
        `;
        contenedorFavoritos.appendChild(nuevaTarjeta);


        const btnEliminar = nuevaTarjeta.querySelector('.eliminar-favoritos');
        btnEliminar.addEventListener('click', () => {
            const index = favoritosGuardados.findIndex(item => item.titulo === favorito.titulo);
            if (index !== -1) {
                favoritosGuardados.splice(index, 1); 
                localStorage.setItem('favoritosGuardados', JSON.stringify(favoritosGuardados)); 
                nuevaTarjeta.remove();
               
            };
            Toastify({

                text: "Eliminado de Favoritos",
                
                duration: 2000
                
                }).showToast();
            
    })
    
    });
}

crearTarjetasFavoritos();