
import './home.css';

//images
import jsIcon from './assets/js-icon.png';
import reactIcon from './assets/react-icon.png';
import apiIcon from './assets/api-icon.png';
import gitIcon from './assets/git-icon.png';

function Home() {

    return <div className="content home-content">

        <div className='title'>
            <h1>./Sobre mim</h1>
            <div className='line-title'></div>
        </div>

        <p className='presentation-text'>
            Desenvolvedor de software em formação, hoje trabalho com desenvolvimento web. <br />
            Destaco-me por criação de interfaces e aplicações FrontEnd utilizando ou não apis
            e serviços externos. Com essas habilidades, busco contribuir para o desenvolvimento
            de novos projetos inovadores e relevantes.
        </p>

        <h2>- O que eu faço!</h2>
        <h3 className='subtitle'>Tecnologias que fazem parte do meu dia a dia:</h3>

        <div className='cards'>
            <div className="card">
                <img src={jsIcon} alt="javascript Icon" />
                <h3>Javascript</h3>
                <p>
                    O uso eficiente do Javascript me permite desenvolver aplicações mais simples ou lidar
                    com situações que exigem um conhecimento abrangente de ponta a
                    ponta da aplicação.
                </p>
            </div>

            <div className="card">
                <img src={reactIcon} alt="React Icon" />
                <h3>React.Js</h3>
                <p>
                    Utilizo o React.js para a criação de interfaces dinâmicas e
                    responsivas. Meu conhecimento abrange desde a criação de componentes
                    reutilizáveis até a integração de bibliotecas e
                    ferramentas adicionais.
                </p>
            </div>

            <div className="card">
                <img src={apiIcon} alt=" rest API icon" />
                <h3>Rest Api</h3>
                <p>
                    Sou capaz de consumir APIs REST de forma eficiente,
                    utilizando métodos HTTP (GET, POST, PUT e DELETE) para manipular recursos de maneira consistente e segura.
                </p>
            </div>

            <div className="card">
                <img src={gitIcon} alt="git icon" />
                <h3>Git</h3>
                <p>
                    Utilizo o Git como parte integrante do meu fluxo de trabalho,
                    garantindo um controle de versão e colaboração em
                    projetos de desenvolvimento.
                </p>
            </div>
        </div><br /><br />

    </div>

};

export default Home;