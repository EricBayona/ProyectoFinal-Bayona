const footer = document.querySelector('#footer');
footer.innerHTML = `
    <div class="contenedor-footer">
        <div class="contenedor-datos">
            <div class="logo contenedor">
                <a href="../index.html">
                    <p>Obras de <span class="rojo">Arte</span></p>
                </a>
            </div>
            <div class="datos">
                <ul>
                    <li>
                        <h4>Curso javascript de CoderHouse</h4>
                    </li>
                    <li>
                        <h4>Profesor: Alejandro Daniel Di Stefano</h4>
                    </li>
                    <li>
                        <h4>Tutor: Juan Narvaez</h4>
                    </li>
                    <li>
                        <h4>Alumno: Eric Bayona</h4>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mapa-sitio">
            <p>Mapa del Sitio</p>
            <ul>
                <li><a class="btn-menu" href="../index.html">Inicio</a></li>
                <li> <a class="btn-menu" href="../index.html#pinturas">Pinturas</a></li>
                <li> <a class="btn-menu" href="../index.html#pinturas-consumidas-desde-api">Pinturas consumidas por
                        Api</a></li>
                <li> <a class="btn-menu" href="./pages/favoritos.html">Favoritos</a></li>
            </ul>
        </div>
    </div>`