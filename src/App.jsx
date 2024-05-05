import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Nav from './components/nav/nav';
import Contact from './components/contacts/contact';

//pages
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Contact />

        <div className='container'>
          <Nav />

          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/projects'} />
            <Route path={'/contact'} />
            <Route path={'/cv'} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;