// src/components/common/Navbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const is3DMode = location.pathname === '/story';

  const handleDoubleClick = () => {
    if (is3DMode) {
      navigate('/');
    } else {
      navigate('/story');
    }
  };

  return (
    <nav className="sketch-navbar">
      <div 
        className="nav-left" 
        onDoubleClick={handleDoubleClick}
        title="Double click me!"
      >
        <div className="nav-logo">R</div>
        <span className="font-sketch" style={{ fontSize: '1.4rem' }}>
          {is3DMode ? "Immersive Branch" : "Main Branch"}
        </span>
      </div>

      <div className="nav-center">
        Home
      </div>

      <div className="nav-right">
        <a 
          href="../../../public/cv.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="sketch-button"
          style={{ fontSize: '1.2rem', padding: '4px 16px' }}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;