
import './nav.css';

//images
import userIcon from './assets/user.png';
import folderIcon from './assets/folder.png';
import chatIcon from './assets/chat.png';
import CVIcon from './assets/cv-icon.png';

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

        <NavLink to={'/cv'}>
            <div className='nav-card'>
                <img src={CVIcon} alt="" /><br />
                <p>CURRÍCULO</p>
            </div>
        </NavLink>
    </nav>
}

export default Nav;