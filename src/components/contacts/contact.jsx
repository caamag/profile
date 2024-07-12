
import './contact.css';

import profileImage from './assets/Perfil.jpg';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import smathphoneIcon from './assets/smartphone.png';
import emailIcon from './assets/o-email.png';
import curriculo from '../../PDF/curriculo.pdf'

import { NavLink } from 'react-router-dom';

function Contact() {
    return <div className='contact-content'>

        <img src={profileImage} alt="" className='profile-image' />

        <h2>Caio Magalhães</h2>
        <h3>Desenvolvedor Front-end</h3>
        <div className='contacts-icons'>
            <a href="https://github.com/caamag" target='blank'>
                <img src={githubIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/caio-lopes-programador/" target='blank'>
                <img src={linkedinIcon} alt="" />
            </a>

            <a href={curriculo} className='cv-btn' target='_blank'>CV</a>
        </div>

        <div className='nav-mobile'>
            <div><NavLink to={'/'}>Início</NavLink></div>

            <div><NavLink to={'/projects'}>Projetos</NavLink></div>

            <div><NavLink to={'/contact'}>Contato</NavLink></div>
        </div>

        <div className='contacts-box'>
            <a href="https://wa.me/5511966197683" target='blank'>
                <div className='wpp-content'>
                    <img src={smathphoneIcon} alt="" />
                    <p>TEL: <br /> (11) 96619-7683</p>
                </div>
            </a>

            <a href="mailto:caiolopesfv@gmail.com" target='blank'>
                <div className='email-content'>
                    <img src={emailIcon} alt="" />
                    <p>Email: <br />caiolopesfv@gmail.com</p>
                </div>
            </a>
        </div><br /><br />

    </div>

};

export default Contact;