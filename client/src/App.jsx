import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About'
import Contacts from '../src/pages/Contacts'
import Register from './auth/Register';
import Main from './pages/Main';
import confirmation from './auth/Confirmation';
// import NavBar from './components/NavBar';


function App() {
  return (
  <div className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
    <Router>
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/confirmation" element={<confirmation />} />
      </Routes>  
    </Router>
  </div>

  );
}

export default App;
