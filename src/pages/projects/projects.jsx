import './projects.css';

//hooks
import { NavLink } from 'react-router-dom';

//images
import pandoraLogo from './assets/Pandora-Logo.png';
import taskFlowLogo from './assets/taskFlow-logo.png';
import lacostoLogo from './assets/Lacoste-logo-.png.png';
import iconLogo from './assets/coin-icon.jpeg';
import zendeskIcon from './assets/zendesk-logo.webp'

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

            <NavLink to={'/projects/3'}>
                <div className="card">
                    <img src={lacostoLogo} alt="" /><br /><br />
                    <p>FAQ INTELIGENTE</p>
                    <a href="https://lacostebrazil.zendesk.com/hc/pt-br" className='project-link'>lacostebrazil.zendesk.com</a>
                </div>
            </NavLink>

            <NavLink to={'/projects/5'}>
                <div className="card">
                    <img src={zendeskIcon} alt="" /><br /><br />
                    <p>APP ZENDESK</p>
                    <a href="" className='project-link'>url indisponível</a>
                </div>
            </NavLink>

            <NavLink to={'/projects/2'}>
                <div className="card task-flow-card">
                    <img src={taskFlowLogo} alt="" /><br /><br />
                    <p>DASH DINÂMICO</p>
                    <a href="https://taskflow-nu-bice.vercel.app/" className='project-link'>taskflow-nu-bice.vercel.app/</a>
                </div>
            </NavLink>

            <NavLink to={'/projects/4'}>
                <div className="card">
                    <img src={iconLogo} alt="" className='icon-logo' /><br /><br />
                    <p>PROJECT MANAGER</p>
                    <a href="https://coin-weld.vercel.app/" className='project-link'>coin-weld.vercel.app/</a>
                </div>
            </NavLink>
        </div><br /><br />
    </div>
};

export default Projects;