import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="navbar">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
