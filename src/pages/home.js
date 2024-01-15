import './home.css'; 


function Home () {

    return <div className="home container">

        <div className='home-text'>
            <h1>Desenvolvimento <br /><span>Web</span></h1>
        </div>

        <div className='icons-container'>

            <a href='https://github.com/caamag' target='_blank'>
                <img src='./assets/github-icon.png' alt='github icon'/>
            </a>

            <a href='https://www.linkedin.com/in/caio-lopes-programador/' 
                target='_blank'>
                <img src='./assets/linkedin-icon.png' alt='linkedin icon'/>
            </a>

            <a><p>CV</p></a>

        </div>

    </div>

}

export default Home; 