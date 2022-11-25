import React, {Component} from "react";
import './CrudCarro.css';
import Main from "../template/Main";

const title = "Carros";

const Carros =[
    {'id': 1, 'placa': 1111, 'modelo': 'Siena', 'ano': 2012},
    {'id': 2, 'placa': 2222, 'modelo': 'Corsa', 'ano': 2013},

]

export default class CrudCarro extends Component{
    renderTable(){
        return(
            <div className="lista">
                <table className="listaCarros" id="tblistaCarros">
                    <thead className="tabela">
                        <th className="tabTituloPlaca">Placa</th>
                        <th className="tabTituloModelo">Modelo</th>
                        <th className="tabTituloAno">Ano</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {Carros[0].placa}
                            </td>
                            <td>
                                {Carros[0].modelo}
                            </td>
                            <td>
                                {Carros[0].ano}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    render(){
        return(
            <Main title={title}>
                {this.renderTable()}
            </Main>
        )
    }
}