fetch('https://api.harvardartmuseums.org/object?apikey=5304694a-0cb5-4c00-81ab-135eb2e44404&classification=Paintings&size=20')
  .then(response => response.json())
  .then(data => {
    const pinturasConsumidasApi = document.getElementById('pinturas-consumidas-desde-api');
    let count = 0;
    data.records.forEach(record => {
      if (record.images && record.images.length > 0 && count < 10) {
        const title = record.title || 'Sin título';
        const artist = record.people ? record.people.map(person => person.name).join(', ') : 'Autor desconocido';
        const imageUrl = record.images[0].baseimageurl;

        const tarjetaApi = document.createElement('div');
        tarjetaApi.classList.add('tarjeta-api');
        tarjetaApi.innerHTML = `
          <h2>${title}</h2>
          <img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">
          <p><strong>Autor:</strong> ${artist}</p>
          <button class="favoritos">Agregar a Favoritos</button>
        `;
        pinturasConsumidasApi.appendChild(tarjetaApi);
        count++;
      }
    });
    const btnFavoritos = document.querySelectorAll('.favoritos');
    btnFavoritos.forEach(favorito => {
        favorito.addEventListener('click', () => {
          
            const cajaContenedora = favorito.parentNode;
            console.log(cajaContenedora);
            const contenidoHTML = cajaContenedora.outerHTML;


            const obraExistente = contenedorFavoritosAgregados.find(obra => obra.contenidoHTML === contenidoHTML);
            if (!obraExistente) {
                const imagen = cajaContenedora.querySelector('img').src;
                const rutaImagen = imagen.replace('http://127.0.0.1:5501', '..');
                const titulo = cajaContenedora.querySelector('h2').textContent;
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
            Toastify({

              text: "Agregado a Favoritos",
              
              duration: 3000
              
              }).showToast();
        })
    })
  })
  .catch(error => console.error('Error:', error));



