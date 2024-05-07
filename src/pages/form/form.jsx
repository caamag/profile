import './form.css';

import { useState } from 'react';
import emailJS from '@emailjs/browser';

function FormContact() {

    const [name, setName] = useState('');
    const [tel, setTell] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit(e) {

        e.preventDefault();

        const templateParams = {
            name,
            tel,
            email,
            content,
        }

        emailJS.send("service_xqbxkmb", "template_fspdihh", templateParams, "cFvwDQhk8yP0OoPqX")
            .then(response => {
                console.log("Email enviado", response.status, response.text);
                setName('');
                setTell('');
                setEmail('');
                setContent('');
            })
    }

    return <div className="content form-contact-content">

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={name}
                placeholder='Informe o seu nome:'
                onChange={(e) => { setName(e.target.value) }}
            /><br />

            <input type="email"
                value={email}
                placeholder='Informe o seu email'
                onChange={(e) => { setEmail(e.target.value) }}
            /><br />

            <input type="number"
                value={tel}
                placeholder='Informe o seu número de telefone:'
                onChange={(e) => { setTell(e.target.value) }}
            /><br />

            <textarea type="text"
                value={content}
                placeholder='Sobre o que deseja conversar?'
                onChange={(e) => { setContent(e.target.value) }}
            /><br />

            <button type='submit'>Enviar mensagem</button>

        </form>

    </div>
};

export default FormContact;