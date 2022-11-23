import './Menu.css';

export default function Menu(props){
    return(
        <nav className='menu'>
            <a href='#/'>
                Carros
            </a>
            <a href='#/'>
                Alugados
            </a>
            <a href='#/'>
                Disponíveis
            </a>
        </nav>
    )
}