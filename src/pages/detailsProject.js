
import './detailsProject.css'; 

import { useParams } from "react-router-dom";

import ObjProjects from "./data/objProjetos";

function DetailsProject () {

    const {id} = useParams(); 
    const index = id - 1; 

    return <div className="details container">

        <div className='img-container'>
            <img src={ObjProjects[index].img} alt='project logo'/>
        </div>

        <div className='project-content'>
            <h2>{ObjProjects[index].name}</h2>

            <p>Sobre o projeto: </p>
            
            <ul>
                <li>Tecnologias: </li>
                <li><a href=''>Repositório</a></li>
                <li><a href={ObjProjects[index].link}>visitar site</a></li>
            </ul>
        </div>

    </div>

}; 

export default DetailsProject; 