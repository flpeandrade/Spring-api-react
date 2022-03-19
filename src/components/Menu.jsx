import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="#">
                    <img src="./img/logo.png" width="80" height="80" alt="" />
                </Link>
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Destinos">Destinos</Link></li>
                    <li><Link to="Promocoes">Promoções</Link></li>
                    <li><Link to="Contato">Contato</Link></li>
                    <li><Link to="Pacotes">Pacotes</Link></li>
                </ul>
                <div id="mobile">
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </nav>
        );
    
}