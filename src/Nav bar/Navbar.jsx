import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar-container">

        {/* LEFT SECTION */}
        <div className="left-section">
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <img src="/assets/tjslogo.png" alt="Logo" className="logo" />
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="desktop-navbar">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
      </div>

      {/* MOBILE SIDE MENU */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
