import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section id="hero">
                <h1>Agência Vorazes</h1>
                <p>Venha Realizar Aquela tão sonhada <strong>Viagem.</strong></p>
                <Link className="bt bt-yellow" to="Destinos">Confira já</Link>
            </section>
            <section id="product1" className="section-p1">
                <h2>Sugestões de Viagens</h2>
                <p>Destinos imperdíveis</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="./img/Fortaleza.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Fortaleza</h5>
                            <h4>R$813,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                    </div>
                    <div className="pro">
                        <img src="./img/Rio de Janeiro.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>Rio de Janeiro</h5>
                            <h4>R$940,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                    </div>
                    <div className="pro">
                        <img src="./img/São paulo.jpg" alt="" />
                        <div className="des">
                            <span>Brasil</span>
                            <h5>São Paulo</h5>
                            <h4>R$679,00</h4>
                            <p>Em até 12x com juros no cartão de crédito</p>
                        </div>
                        <Link to="#"><i className="fal fa-shopping-cart cart"></i></Link>
                    </div>
                </div>
            </section>
        </>
    );
}