import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./components/template/Main";
import CrudCarro from "./components/CrudCarro/CrudCarro";

export default function Rotas(){
    return(
        <Routes>
            <Route exact path='/' 
                element={
                    <Main title="Bem Vindo">
                        <div>Carros, alugados e Disponíveis</div>
                    </Main>
                }
            />
            <Route path='/carros' element={<CrudCarro />} />
            <Route path ='*' element={
                <Main title="Bem Vinto">
                    <div>Página não encontrada</div>
                </Main>
            } />
        </Routes>
    )
}