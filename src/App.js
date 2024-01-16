import './App.css';

//pages
import Home from './pages/home';
import Sobre from './pages/sobre';
import Projetos from './pages/projetos';
import DetailsProject from './pages/detailsProject';
import Contato from './pages/contato';

//components
import Navbar from './components/navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">

      <BrowserRouter>

          <Navbar />

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/projetos' element={<Projetos />}/>
          <Route path='/projetos/:id' element={<DetailsProject />}/>
          <Route path='/contato' element={<Contato />}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
