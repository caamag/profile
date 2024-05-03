
import './nav.css';
import { NavLink } from 'react-router-dom';


function Nav () {

    return <header className="header">

        <ul>
            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/projects'}>PROJETOS</NavLink></li>
        </ul>
        
    </header>
}

export default Nav;