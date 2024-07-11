
import './currentProject.css';
import { useParams, NavLink } from 'react-router-dom';

//images
import pandoraLogo from '../projects/assets/Pandora-Logo.png';
import taskFlowLogo from '../projects/assets/taskFlow-logo.png';
import arrow from './assets/arrow-left.png';
import githubIcon from '../../components/contacts/assets/github.png';
import lacosteLogo from '../projects/assets/Lacoste-logo-.png.png'
import coinIcon from '../projects/assets/coin-icon.jpeg'
import zendeskIcon from '../projects/assets/zendesk-logo.webp'


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
            logo: taskFlowLogo,
            title: './Dashboard dinâmico',
            content: <div className='project-resume'>
                <p>Um projeto pessoal focado em atender demandas de controle de gastos e gestão de clientes.
                    Atualmente, a aplicação conta com um sistema de autenticação de usuário robusto, permitindo a
                    criação de contas e a personalização das informações do perfil, como nome e foto. Desenvolvido
                    com React no front-end e Firebase para autenticação, o TaskFlow está em fase de desenvolvimento,
                    com muitas funcionalidades planejadas para o futuro. Mesmo ainda não estando completo, já é possível
                    criar uma conta e explorar as configurações básicas do perfil.</p>
            </div>,
            htmlUrl: 'https://taskflow-nu-bice.vercel.app/',
            repository: true,
            repositoryLink: 'https://github.com/caamag/taskflow'
        },
        {
            logo: lacosteLogo,
            title: './FAQ INTELIGENTE',
            content: <div className='project-resume'>
                <p>
                    Durante meu período de estágio, desenvolvi uma central de ajuda para a Lacoste utilizando HTML,
                    CSS e JavaScript Vanilla. Esta página foi projetada para auxiliar o suporte ao cliente, oferecendo
                    informações de autoatendimento e permitindo que os clientes abram chamados diretamente pela plataforma.
                    A solução facilita a resolução de dúvidas e problemas, proporcionando uma experiência mais eficiente e
                    satisfatória para os clientes.
                </p></div>,
            htmlUrl: 'https://lacostebrazil.zendesk.com/hc/pt-br',
            repository: false,
            repositoryLink: ''
        },
        {
            logo: coinIcon,
            title: './Project Manager',
            content: <div className='project-resume'>
                <p>
                    Meu primeiro projeto pessoal foi um sistema CRUD de tarefas, desenvolvido
                    utilizando apenas JavaScript e armazenando as informações em local storage.
                    Este projeto inclui funcionalidades para gerenciar projetos e clientes, além de
                    gerar relatórios simples em formato CSV e PDFs, automaticamente gerados com base
                    nas informações armazenadas ao longo do tempo. Foi uma excelente oportunidade para
                    aprimorar minhas habilidades em JavaScript e no desenvolvimento de soluções de armazenamento local.
                </p>
            </div>,
            htmlUrl: 'https://coin-weld.vercel.app/',
            repository: true,
            repositoryLink: 'https://github.com/caamag/Gerenciador-de-projetos'
        },
        {
            logo: zendeskIcon,
            title: './App Zendesk',
            content: <div className='project-resume'>
                <p>Desenvolvi um aplicativo Zendesk que captura dados da API e, em poucos cliques,
                    gera um arquivo CSV com essas informações organizadas. Por exemplo, é possível extrair
                    uma base de usuários do Zendesk e obter uma planilha com informações relevantes de todos
                    os usuários, como nome e função. Embora o projeto seja restrito a um cliente e não possa
                    ser demonstrado em execução, o repositório com o código estará disponível para revisão.</p>
            </div>,
            htmlUrl: 'https://github.com/caamag/Zendesk-to-csv',
            repository: true,
            repositoryLink: 'https://github.com/caamag/Zendesk-to-csv'
        }
    ]

    const contentClass = projects[index].title === './Dashboard dinâmico'
        ? 'content current-project-content-dark'
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