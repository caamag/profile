import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Nav from './components/nav/nav';

//pages
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/projects'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;