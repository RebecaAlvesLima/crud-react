import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props){

     const [currentUser, setCurrentUser] = useState(undefined);
     useEffect(() => {
          const user = AuthService.getCurrentUser();
     if (user) {
          setCurrentUser(user);
     }
}, []);

    return(
        <nav className='menu'>
           <Link to="/carros">
                Carros
           </Link>
           <Link to="/disponiveis">
                Disponíveis
           </Link>
           <Link to="/alugados">
                Alugados
           </Link>
           {currentUser ? (
               <Link to="/logout">
                    Logout
               </Link>
          ) : (
               <Link to="/login">
                    Login
               </Link>
          )}
        </nav>
    )
}