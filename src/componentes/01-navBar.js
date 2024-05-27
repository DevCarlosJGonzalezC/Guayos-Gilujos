import React from "react";
import '../hojas-de-estilos/01-navBar.css'

function NavBar(){
    return(
        <div className="contenedor-navBar">
            <div className="logo"><h2>Guayos Gilujos</h2></div>
            <div className="nav">
                <nav>
                    <ul>
                        <li><a href="#"> Inicio</a></li>
                        <li><a href="#"> Carrito de compras</a></li>
                        <li><a href="#"> Mis compras</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;