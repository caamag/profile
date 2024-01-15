
import './projetos.css'; 
import { useEffect } from 'react';
import { useState } from 'react';

function Projetos () {

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

    return <div className="projetos container">

        <section className='slide'>

            {projects1.map((project) => (
                <a href={project.link}>
                    <div className='item' key={project.id}>
                        <img alt='project image'
                        src={project.img}/>
                        <h1>{project.name}</h1>
                    </div>
                </a>
            ))}

        </section>

        <section className='slide'>

            {projects2.map((project) => (
                <a href={project.link}>
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