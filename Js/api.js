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
        `;
        pinturasConsumidasApi.appendChild(tarjetaApi);
        count++;
      }
    });
  })
  .catch(error => console.error('Error:', error));


//   const ObrasDeArte = [
//     {
//         id:1,
//         nombre:"La gran ola de Kanagawa",
//         autor:'Katsushika Hokusai',
//     },
//     {
//         id:2,
//         nombre:"Creación de Adán en la Capilla Sixtina",
//         autor:'Miguel Ángel Buonarroti',
//     },
//     {
//         id:3,
//         nombre:"El jardín de las Delicias",
//         autor:'El Bosco',
//     },
//     {
//         id:4,
//         nombre:"El Guernica",
//         autor:'Pablo Picasso',
//     },
//     {
//         id:5,
//         nombre:"La Gioconda",
//         autor:'Leonardo da Vinci',
//     },
//     {
//         id:6,
//         nombre:"La sorpresa del trigo",
//         autor:'Maruja Mallo',
//     },
// ]




