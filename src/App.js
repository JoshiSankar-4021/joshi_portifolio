import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Nav bar/Navbar.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Projects from './Projects/Projects.jsx';
import Services from './Services/Services.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
