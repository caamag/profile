import './projects.css';

//hooks
import { NavLink } from 'react-router-dom';

//images
import pandoraLogo from './assets/Pandora-Logo.png';

function Projects() {

    return <div className="content projects-content">

        <div className='title'>
            <h1>Projetos</h1>
            <div className='line-title'></div>
        </div>

        <div className='cards'>
            <NavLink to={'/'}>
                <div className="card">
                    <img src={pandoraLogo} alt="" /><br /><br />
                    <p>FAQ INTELIGENTE</p>
                    <a href="https://pandorabrasil.zendesk.com" className='project-link'>pandorabrasil.zendesk.com</a>
                </div>
            </NavLink>

            <NavLink to={'/'}>
                <div className="card"></div>
            </NavLink>

            <NavLink to={'/'}>
                <div className="card"></div>
            </NavLink>
        </div>
    </div>
};

export default Projects;