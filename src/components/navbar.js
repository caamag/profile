import './navbar.css'; 

import { Link } from 'react-router-dom';

function Navbar () {

    return <div className="navbar">

        <ul className='navbar-content'>

            <Link to={'/'}>Home</Link>

            <Link to={'/sobre'}>Sobre</Link>

            <Link to={'/projetos'}>Projetos</Link>

            <Link to={'/contato'}>Contato</Link>

        </ul>

    </div>

}

export default Navbar; 