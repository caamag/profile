
import './nav.css';

//images
import userIcon from './assets/user.png';
import folderIcon from './assets/folder.png';
import chatIcon from './assets/chat.png';
import CVIcon from './assets/cv-icon.png';
import curriculo from '../../PDF/curriculo.pdf'

//hooks
import { NavLink } from 'react-router-dom';


function Nav() {

    return <nav className="nav">
        <NavLink to={'/'}>
            <div className='nav-card'>
                <img src={userIcon} alt="" /><br />
                <p>INÌCIO</p>
            </div>
        </NavLink>

        <NavLink to={'/projects'}>
            <div className='nav-card'>
                <img src={folderIcon} alt="" /><br />
                <p>PROJETOS</p>
            </div>
        </NavLink>

        <NavLink to={'/contact'}>
            <div className='nav-card'>
                <img src={chatIcon} alt="" /><br />
                <p>CONTATO</p>
            </div>
        </NavLink>

        <a href={curriculo} target='blank'>
            <div className='nav-card'>
                <img src={CVIcon} alt="" /><br />
                <p>CURRÍCULO</p>
            </div>
        </a>
    </nav>
}

export default Nav;