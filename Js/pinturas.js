let pinturas =[];

fetch("./js/pinturas.json")
    .then(response => response.json())
    .then(data =>{
        pinturas = data;
        console.log(pinturas);
        
        crearTarjetasPinturas(pinturas)
    })



const contendorTarjetas= document.querySelector('#pinturas')
function crearTarjetasPinturas() {
contendorTarjetas.innerHTML =""
pinturas.forEach(pintura => {
    const nuevaPintura = document.createElement("div");
    nuevaPintura.classList = "tarjeta-api";
    nuevaPintura.innerHTML = `
        <img src="assets/imagenes/${pintura.id}.jpg">
        <h3>${pintura.nombre}</h3>
        <p>${pintura.autor}</p>
        
    `;
    contendorTarjetas.appendChild(nuevaPintura);
    });
}
crearTarjetasPinturas()
/* Esto va en la tarjeta <div>
        <button id="favoritos">Agregar a Favoritos</button>
    </div> */