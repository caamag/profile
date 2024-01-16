
import './projetos.css'; 
import { useEffect } from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

function Projetos () {

    //projects information
    useEffect(() => {

        async function getProjectsData (){
            const res = await fetch('./projetos.json');
            const data = await res.json(); 
            const slide1 = data.slide1; 
            const slide2 = data.slide2;
            setProjects1(slide1); 
            setProjects2(slide2); 
            
        }

        getProjectsData();

    }, []); 

    const [projects1, setProjects1] = useState([]);
    const [projects2, setProjects2] = useState([]);

    //show other projects
    const [nxtSlide, setNxtSlide] = useState(true);
    const slideStyle = nxtSlide ? 
    'slide':
    'slide slide1'; 

    return <div className="projetos container">

        <section className={slideStyle}>

            {projects1.map((project) => (
                <a href={`/projetos/${project.id}`} className='link-container'>
                    <div className='item' key={project.id}>
                        <img alt='project image'
                        src={project.img}/>
                        <h1>{project.name}</h1>
                    </div>
                </a>
            ))}

            <button className='prev-btn'
            onClick={() => {setNxtSlide(false)}}>
                <img src="./assets/next-btn.png" alt="" />
            </button>

            <button className='next-btn'
            onClick={() => {setNxtSlide(true)}}>
                <img src="./assets/prev-btn.png" alt="" />
            </button>

        </section>

        <section className='slide'>

            {projects2.map((project) => (
                <a href={`/projetos/${project.id}`} className='link-container'>
                    <div className='item' key={project.id}>
                        <img alt='project image'
                        src={project.img}/>
                        <h1>{project.name}</h1>
                    </div>
                </a>
            ))}
            
        </section>

    </div>

};

export default Projetos; 