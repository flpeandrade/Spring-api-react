import React from "react";

export default function Destinos() {
    return (

        <>
            <section className="corpo-destino">
                <section id="hero">
                    <h1>Destinos</h1>
                </section>
                <br />
                <br />
                <form className="container-fluid">
                    <div className="form-row col-md-6 offset-md-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputDate">Data (Ida)</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="Data" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputDate">Data (Volta)</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="Data" />
                        </div>
                    </div>
                    <div className="form-row col-md-6 offset-md-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputText">Origem</label>
                            <input type="text" className="form-control" id="inputText" placeholder="Origem" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputText">Destino</label>
                            <input type="text" className="form-control" id="inputText" placeholder="Destino" />
                        </div>
                    </div>
                    <div className="form-row col-md-6 offset-md-4">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Adultos</label>
                            <select id="inputState" className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Crianças</label>
                            <select id="inputState" className="form-control">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-row col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Termos e Condições
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark col-md-4 col-md-1">Buscar</button>
                </form>
                <br />
                <br />
            </section>
        </>
    );
}