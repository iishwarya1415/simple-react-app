import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';

function App() {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '18px',
    padding: '8px 16px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  };

  const activeLinkStyle = {
    backgroundColor: '#61dafb',
    color: '#000',
  };

  const NavBar = () => {
    const location = useLocation();

    return (
      <nav style={navContainerStyle}>
        {['/', '/about', '/settings'].map((path, i) => {
          const names = ['Home', 'About', 'Settings'];
          return (
            <Link
              key={path}
              to={path}
              style={{
                ...navLinkStyle,
                ...(location.pathname === path ? activeLinkStyle : {}),
              }}
            >
              {names[i]}
            </Link>
          );
        })}
      </nav>
    );
  };

  return (
    <Router>
      <div style={outerWrapper}>
        <NavBar />
        <div style={contentContainer}>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>✨ Simple React App ✨</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Styles
const outerWrapper = {
  minHeight: '100vh',
  background: 'linear-gradient(to right, #f8f9fa, #e0f7fa)',
  fontFamily: 'Segoe UI, sans-serif',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '15px 20px',
  backgroundColor: '#282c34',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const contentContainer = {
  backgroundColor: '#fff',
  margin: '40px auto',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  width: '90%',
  maxWidth: '800px',
};

export default App;
