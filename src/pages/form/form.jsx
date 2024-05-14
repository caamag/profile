import './form.css';

import { useState } from 'react';
import emailJS from '@emailjs/browser';
import { findAllByDisplayValue } from '@testing-library/react';

function FormContact() {

    const [name, setName] = useState('');
    const [tel, setTell] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {

        setLoading(true);
        e.preventDefault();

        const templateParams = {
            name,
            tel,
            email,
            content,
        }

        if (!name || !tel || !email || !content) {
            setLoading(false)
            setError(true)
            setErrorMessage('Preencha todos os campos')
            return
        }

        emailJS.send("service_xqbxkmb", "template_fspdihh", templateParams, "cFvwDQhk8yP0OoPqX")
            .then(response => {
                console.log("Email enviado", response.status, response.text);
                setName('');
                setTell('');
                setEmail('');
                setContent('');
                setError(false);
                setLoading(false);
            })
            .catch(error => {
                setError(true)
                setErrorMessage(`${error.message} - Erro ao enviar o email, tente novamente mais tarde`)
            })
    }

    return <div className="content form-contact-content">

        <form onSubmit={handleSubmit}>

            <div className='title'>
                <h1>./Fale comigo</h1>
                <div className='line-title'></div>
            </div>

            {loading && <p className='loading'>Carregando...</p>}
            {error && <p className='error-message'>{errorMessage}</p>}
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

            <button type='submit'>Enviar mensagem</button><br /><br />

        </form>

    </div>
};

export default FormContact;