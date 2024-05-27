import React from "react";
import '../hojas-de-estilos/footer.css'

function Footer(props){
return(
<div className='contenedor-footer'>
    <div className="contenedor-izquierdo">
        <ul>
            <li>Carlos Jose Gonzalez C.</li>
            <li>Sergio A. Padilla T.</li>
            <li>Carlos A. Restrepo G.</li>
            <li>Paola A. Aguirre T.</li>
        </ul>
    </div>
    <div className="contenedor-derecho">
        <img className="contenedor-imagen"
        src={require('../imagenes/imagen-logo.png')}
        alt="Logo team"
        />
    </div>
</div>
)
}

export default Footer;