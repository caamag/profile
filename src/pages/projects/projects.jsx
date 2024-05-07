import './projects.css';

//hooks
import { NavLink } from 'react-router-dom';

//images
import pandoraLogo from './assets/Pandora-Logo.png';
import taskFlowLogo from './assets/taskFlow-logo.png';
import shareLogo from './assets/share-logo.png';

function Projects() {

    return <div className="content projects-content">

        <div className='title'>
            <h1>./Projetos</h1>
            <div className='line-title'></div>
        </div>

        <div className='cards'>
            <NavLink to={'/projects/1'}>
                <div className="card">
                    <img src={pandoraLogo} alt="" /><br /><br />
                    <p>FAQ INTELIGENTE</p>
                    <a href="https://pandorabrasil.zendesk.com" className='project-link'>pandorabrasil.zendesk.com</a>
                </div>
            </NavLink>

            <NavLink to={'/projects/2'}>
                <div className="card">
                    <img src={shareLogo} alt="" /><br /><br />
                    <p>Mini Blog</p>
                    <a href="" className='project-link'>urlIndisponível</a>
                </div>
            </NavLink>

            <NavLink to={'/projects/3'}>
                <div className="card task-flow-card">
                    <img src={taskFlowLogo} alt="" /><br /><br />
                    <p>Dashboard dinâmico</p>
                    <a href="" className='project-link'>urlIndisponível</a>
                </div>
            </NavLink>
        </div><br /><br />
    </div>
};

export default Projects;