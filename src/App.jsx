import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Nav from './components/nav/nav';
import Contact from './components/contacts/contact';

//pages
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import CurrentProject from './pages/currentProject/currentProject';
import FormContact from './pages/form/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Contact />

        <div className='container'>
          <Nav />

          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/projects/:id'} element={<CurrentProject />} />
            <Route path={'/contact'} element={<FormContact />} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;