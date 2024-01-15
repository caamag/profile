import './navbar.css'; 

import { NavLink } from 'react-router-dom';

function Navbar () {

    return <div className="navbar">

        <ul className='navbar-content'>

            <NavLink to={'/'}>Home</NavLink>

            <NavLink to={'/sobre'}>Sobre</NavLink>

            <NavLink to={'/projetos'}>Projetos</NavLink>

            <NavLink to={'/contato'}>Contato</NavLink>

        </ul>

    </div>

}

export default Navbar; 