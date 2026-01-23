import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar-container">
    <div className="image">
        <img src="/assets/tjslogo.png" alt="Logo" className="logo" />
    </div>
    <div className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/services" className="nav-link">Services</NavLink>
      {/* <NavLink to="/projects" className="nav-link">Projects</NavLink> */}
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </div>
    </div>
  );
}

export default Navbar;