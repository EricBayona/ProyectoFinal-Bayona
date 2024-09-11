const header = document.querySelector('#header');
header.innerHTML=`
    <div class="contenedor-navegacion contenedor">
            <div class="logo">
                <p>Obras de <span class="rojo">Arte</span></p>
            </div>
            <nav class="contenedor-nav ocultar">
                <a class="btn-menu" href="../index.html">Inicio</a>
                <a class="btn-menu" href="#pinturas">Pinturas</a>
                <a class="btn-menu" href="#pinturas-consumidas-desde-api">Pinturas consumidas por Api</a>
                <a class="btn-menu" href="./pages/favoritos.html">Favoritos</a>
                <a class="btn-menu" href="#">Sobre Nosotros</a>
                <a class="btn-menu" href="#">contacto</a>
            </nav>
            <div class="hamburguesa">
                <span></span>
                <span></span>
                <span></span>
            </div>
    </div>
    `

const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.contenedor-nav');
const btnMenus = document.querySelectorAll('.btn-menu');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = ()=>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu =()=>{
    navegacion.classList.remove('ocultar')
    botonCerrar()
}
const botonCerrar = () =>{
    if (!document.querySelector('.btn-cerrar')) {
        const btnCerrar = document.createElement('p');
        const overlay = document.createElement('div');
        overlay.classList.add('pantalla-completa');
        const body = document.querySelector('body');
        if(document.querySelectorAll('.pantalla-completa').length > 0 )return;
        body.appendChild(overlay);
        btnCerrar.textContent = 'x';
        btnCerrar.classList.add('btn-cerrar');
        navegacion.appendChild(btnCerrar);
        cerrarMenu(btnCerrar,overlay);
    }

}
const cerrarMenu =(boton,overlay)=>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove()
        boton.remove();
    })
    overlay.onclick = function (){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
    btnMenus.forEach(btnMenu=>{
        btnMenu.addEventListener('click',()=>{
            navegacion.classList.add('ocultar');
            boton.remove();
            overlay.remove()
        })
    })
}
const videoInicio = document.querySelector('#video-inicio');
videoInicio.innerHTML=`
<div class="contenido-header">
         <div class="contenedor-encabezado">
                <div class="texto-encabezado">
                    <div class="titulo-encabezado contenedor">
                        <h2>Galeria de Arte</h2>
                        <span>Curso JavaScript CoderHouse</span>
                    </div>
                </div>
                <video autoplay loop muted>
                    <source src="assets/videos/5201913-hd_1920_1080_24fps.mp4">
                </video>
            </div>
    </div>
`