
import './home.css';

//images
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas magni tenetur vitae eveniet, repellat laudantium eos
            suscipit doloribus laborum, ipsum quos? Iure neque natus voluptatem
            temporibus repellat possimus eos aperiam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas magni tenetur vitae eveniet, repellat laudantium eos
            suscipit doloribus laborum, ipsum quos? Iure neque natus voluptatem
            temporibus repellat possimus eos aperiam.
        </p>

        <h2>- O que eu faço!</h2>
        <h3 className='subtitle'>Tecnologias que fazem parte do meu dia a dia:</h3>

        <div className='cards'>
            <div className="card">
                <img src={reactIcon} alt="" />
                <h3>React.Js</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, ipsam similique saepe cupiditate suscipit obcaecati! Omnis
                    facere distinctio quod totam esse, laboriosam ex quos ab odit corrupti
                    asperiores non excepturi.
                </p>
            </div>

            <div className="card">
                <img src={apiIcon} alt="" />
                <h3>Rest Api</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, ipsam similique saepe cupiditate suscipit obcaecati! Omnis
                    facere distinctio quod totam esse, laboriosam ex quos ab odit corrupti
                    asperiores non excepturi.
                </p>
            </div>

            <div className="card">
                <img src={gitIcon} alt="" />
                <h3>Git</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, ipsam similique saepe cupiditate suscipit obcaecati! Omnis
                    facere distinctio quod totam esse, laboriosam ex quos ab odit corrupti
                    asperiores non excepturi.
                </p>
            </div>
        </div><br /><br />

    </div>

};

export default Home;