import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./components/template/Main";
import CrudCarro from "./components/CrudCarro/CrudCarro";
import AuthService from "./service/AuthService";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

export default function Rotas(){

    const [currentUser, setCurrentUser] = useState(undefined);
    
    useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
            setCurrentUser(user);
        }
    }, []);

    return(
        <Routes>
            <Route exact path='/' 
                element={
                    <Main title="Bem Vindo">
                        <div>Carros, alugados e Disponíveis</div>
                    </Main>
                }
            />
           {currentUser ? (
                <Route exact path='/carros'
                element={<CrudCarro />}
                />
        ) : (
                <Route exact path='/carros'
                element={
                    <Main title="Cadastro de Carros">
                    <div>Não autorizado!</div>
                    </Main>
                    }
                />
                )}
        {currentUser ? (
            <Route exact path='/alugados'
            element={
            <Main title="Alugados">
            <div>Página de carros alugados...</div>
            </Main>
        }
        />
        ) : (
            <Route exact path='/alugados'
            element={
            <Main title="Alugados">
            <div>Não autorizado!</div>
            </Main>
            }
        />
        )}
    <Route path='/login' element={<Login />} />
    <Route path='/logout' element={<Logout />} />
    <Route path="*" to='/' />
    </Routes>
    )
}