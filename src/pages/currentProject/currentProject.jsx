
import './currentProject.css';
import { useParams, NavLink } from 'react-router-dom';

//images
import pandoraLogo from '../projects/assets/Pandora-Logo.png';
import taskFlowLogo from '../projects/assets/taskFlow-logo.png';
import shareLogo from '../projects/assets/share-logo.png';
import arrow from './assets/arrow-left.png';
import githubIcon from '../../components/contacts/assets/github.png';


function CurrentProject() {

    const { id } = useParams();
    let index = id - 1;
    const projects = [
        {
            logo: pandoraLogo,
            title: './FAQ INTELIGENTE',
            content: <div className='project-resume'>
                <p>A Central de Ajuda aos Clientes Pandora Brasil é um projeto desenvolvido
                    durante meu período de estágio na empresa BCR.CX em colaboração com a equipe de consultoria Zendesk.
                    Este projeto visa facilitar o autoatendimento dos clientes, oferecendo uma plataforma intuitiva para
                    esclarecer dúvidas, realizar solicitações e registrar reclamações.</p>
                <p>Minha responsabilidade principal foi o desenvolvimento da página em si, utilizando uma combinação
                    de tecnologias como HBS (Handlebars), uma linguagem de templates amplamente utilizada pela Zendesk,
                    CSS e JavaScript. Ao longo do processo, concentrei-me na criação da homepage, na estruturação das
                    páginas de artigos e seções, bem como na estilização de formulários para a abertura de chamados.</p>
                <p>Além disso, desenvolvi páginas específicas para a captura de pesquisas de satisfação diretamente
                    dentro da plataforma Zendesk. Isso foi alcançado através da geração dinâmica de formulários com
                    base nos dados trazidos da API da conta do cliente. Essa abordagem permitiu que, ao final de cada
                    interação, fossem coletados dados sobre a satisfação do cliente, proporcionando insights
                    para aprimorar continuamente a experiência do usuário.</p>
            </div>,
            htmlUrl: 'https://pandorabrasil.zendesk.com/hc/pt-br',
            repository: false,
            repositoryLink: ''
        },
        {
            logo: shareLogo,
            title: './Mini Blog',
            content: <div className='project-resume'>
                <p>O projeto do blog em desenvolvimento é uma iniciativa onde integrei tecnologias
                    modernas para oferecer uma boa experiência aos usuários. Utilizando a biblioteca
                    React.js para o frontend e o Firebase, o serviço de banco de dados do Google, para o backend,
                    consegui criar uma plataforma dinâmica e interativa.</p>
                <p>No âmbito do frontend, adotei o React.js devido à sua eficiência e capacidade de criar interfaces
                    de usuário reativas e escaláveis. Isso permitiu uma experiência de navegação fluida e responsiva
                    para os usuários do blog. Além disso, ao utilizar o Firebase como backend, pude garantir uma
                    infraestrutura robusta e confiável para armazenar dados e gerenciar a autenticação dos usuários.</p>

                <p>Um dos principais recursos do blog é a capacidade dos usuários de criar uma conta e acessar
                    conteúdos exclusivos disponíveis apenas para membros logados. A autenticação é gerenciada
                    pelo Firebase Authentication, garantindo a segurança dos dados dos usuários.</p>

                <p>Após o login, os usuários têm a liberdade de compartilhar suas próprias postagens,
                    incluindo texto e URLs de imagens relevantes. Essas postagens são armazenadas de forma
                    centralizada no Firebase Firestore Database, permitindo fácil acesso e gerenciamento do conteúdo.Além disso,
                    implementei a funcionalidade de interação social, onde os usuários podem
                    visualizar as postagens de outros membros e expressar sua apreciação por meio de curtidas.</p>

                <p>Vale lembrar que o projeto ainda esté em desenvolvimento, tanto em suas funcionalidades,
                    quanto em seu layout e identidade visual. Portanto, em determinados momentos podem ocorrer eventuais erros
                    não esperados.</p>
            </div>,
            htmlUrl: 'https://mini-blog-khaki.vercel.app',
            repository: true,
            repositoryLink: 'https://github.com/caamag/share'
        },
        {
            logo: taskFlowLogo,
            title: './Dashboard dinâmico',
            content: <div className='project-resume'>
                <p>Projeto em desenvolvimento...</p>
            </div>,
            htmlUrl: '#',
            repository: true,
            repositoryLink: ''
        }
    ]

    const contentClass = projects[index].title === './Dashboard dinâmico' ? 'content current-project-content-dark'
        : 'content current-project-content'

    return <div className={contentClass}>

        <NavLink to={'/projects'} className='arrow-link'>
            <img src={arrow} alt="" className='back-page' />
        </NavLink>

        {projects[index].repository && <a href={projects[index].repositoryLink} className='repository-link' target='blank'>
            <img src={githubIcon} alt="" />
        </a>}

        <div className='title'>
            <h1>{projects[index].title}</h1>
            <div className='line-title'></div>
        </div>

        <img src={projects[index].logo} alt="" className='primary-image' />

        {projects[index].content}

        <a href={projects[index].htmlUrl} target='blank'>Visitar</a><br /><br /><br /><br />
    </div>
};

export default CurrentProject;