import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About'
import Contacts from '../src/pages/Contacts'
// import NavBar from './components/NavBar';


function App() {
  return (
   <div>
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>  
    </Router>
   </div>

  );
}

export default App;
