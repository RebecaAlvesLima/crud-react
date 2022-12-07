import React, {Component} from "react";
import axios from "axios";
import './CrudCarro.css';
import Main from "../template/Main";

const title = "Carros";

const urlApi = "http://localhost:5174/api/carro"
const initialState= {
    carro: {id:0, ano:'', modelo:'', estatus:''},
    lista:[]
}
/*const Carros =[
    {'id': 1, 'placa': 1111, 'modelo': 'Siena', 'ano': 2012},
    {'id': 2, 'placa': 2222, 'modelo': 'Corsa', 'ano': 2013},

]*/

const user = JSON.parse(localStorage.getItem("user"));


export default class CrudCarro extends Component{
    state={...initialState}
    componentDidMount(){
        /*axios(urlApi).then(resp =>{
            this.setState({lista:resp.data})
        })*/
        axios(urlAPI, { headers: { Authorization: 'Bearer ' + user.token } }).then(resp => {
            this.setState( { lista_carro: resp.data } );
        },
    (error) => {
        const _mens =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();
        this.setState( { mens: _mens });
    }
  );
}
    limpar(){
        this.setState({carro:initialState.carro})
    }
    salvar(){
        const carro = this.state.carro;
        carro.ano = Number(carro.ano);
        const metodo = carro.id ? 'put' : 'post';
        const url = carro.id ? `${urlApi}/${carro.id}` : urlApi;

        axios[metodo](urlApi, carro).then(resp =>{
            const lista = this.getListaAtualizada(resp.data)
            this.setState({carro: initialState.carro,lista})
        })
    }
    getListaAtualizada(carro, add=true){
        const lista  = this.state.lista.filter(a => a.id !== carro.id);
        if (add) lista.unshift(carro);
        return lista;
    }
    atualizaCampo(event){
        const carro = {...this.state.carro};
        carro[event.target.name] = event.target.value;
        this.setState({carro})
    }
    carregar(carro){
        this.setState({carro})
    }
    remover(carro){
        const url = urlApi + "/" +carro.id;
        if(window.confirm("Confirmar remoção do aluno: " + carro.placa)){
            console.log("entrou no confirm");
            axios['delete'](url, aluno).then(resp =>{
                const lista = this.getListaAtualizada(carro,false)
                this.setState({carro: initialState.carro, lista})
            })
        }
    }
    renderForm(){
        return(
            <div className="inclui-container">
                <label>Ano</label>
                <input type="text"
                        id="ano"
                        placeholder="Ano do carro"
                        className="form-input"
                        name="ano"
                        value={this.state.carro.ano}
                        onChange={e=> this.atualizaCampo(e)} />
                <label>Modelo</label>
                <input type="text"
                        id="modelo"
                        placeholder="Modelo do carro"
                        className="form-input"
                        name="modelo"
                        value={this.state.carro.modelo}
                        onChange={e => this.atualizaCampo(e)} />
                <label>Estatus</label>
                <input type="text"
                        id="estatus"
                        placeholder="Estatus do carro"
                        className="form-input"
                        name="estatus"
                        value={this.state.carro.estatus}
                        onChange={e => this.atualizaCampo(e)} />
                <button className="btnSalvar"
                        onClick={e => this.salvar(e)}>
                            Salvar</button>
                <button className="btnCancelar"
                        onClick={e =>this.limpar(e)}>
                            Cancelar</button>
            </div>
        )
    }
    renderTable(){
        return(
            <div className="lista">
                <table className="listaCarros" id="tblistaCarros">
                    <thead className="tabela">
                        <th className="tabTituloAno">Ano</th>
                        <th className="tabTituloModelo">Modelo</th>
                        <th className="tabTituloEstatus">estatus</th>
                    </thead>
                    <tbody>
                        {this.state.map(
                            (carro)=>
                            <tr key={carro.id}>
                                <td>{carro.ano}</td>
                                <td>{carro.modelo}</td>
                                <td>{carro.estatus}</td>
                                <td>
                                    <button onClick={()=>this.carregar(carro)}>
                                        Alterar
                                    </button>
                                </td>
                                <td>
                                    <button onClick={()=>this.remover(carro)}>
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    render(){
        return(
            <Main title={title}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}