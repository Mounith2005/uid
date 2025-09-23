import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">RentARide</div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#cars">Cars</a></li>
        <li><a href="#booking">Book</a></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/experiment3">Exprement 3</Link></li>
        <li><Link to="/experiment4">Exprement 4</Link></li>
        <li><Link to="/experiment5">Exprement 5</Link></li>
        <li><Link to="/experiment6">Exprement 6</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


