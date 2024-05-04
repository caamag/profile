
import './contact.css';

import profileImage from './assets/Perfil.jpg';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import smathphoneIcon from './assets/smartphone.png';
import emailIcon from './assets/o-email.png';

function Contact () {
    return <div className='contact-content'>
        
        <img src={profileImage} alt="" className='profile-image'/>

        <h1>Caio Magalhães</h1><br />
        <h3>Desenvolvedor Fronted</h3>
        <div className='contacts-icons'>
            <a href="https://github.com/caamag"><img src={githubIcon} alt="" /></a>
            <a href=""><img src={linkedinIcon} alt="" /></a>
        </div>

        <div className='contacts-box'>
            <a href="https://wa.me/5511966197683" target='blank'>
                <div className='wpp-content'>
                    <img src={smathphoneIcon} alt="" />
                    <p>TEL: <br /> 1196619-7683</p>
                </div>
            </a>

            <a href="mailto:caiolopesfv@gmail.com" target='blank'>
                <div className='email-content'>
                    <img src={emailIcon} alt="" />
                    <p>Email: <br />caiolopesfv@gmail.com</p>
                </div>
            </a>
        </div>

        <a href="">CV</a>

    </div>

}; 

export default Contact;