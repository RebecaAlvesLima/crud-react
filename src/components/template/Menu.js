import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props){
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
        </nav>
    )
}