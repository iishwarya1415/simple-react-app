import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Navbar from './components/Navbar'; // import your component
import './App.css'; // Optional global styles

function App() {
  return (
    <Router>
      <div className="outer-wrapper">
        <Navbar />
        <div className="content-container">
          <h1 className="app-heading">✨ Simple React App ✨</h1>
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

export default App;
