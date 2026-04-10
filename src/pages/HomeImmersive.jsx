import React from 'react';
import { Link } from 'react-router-dom';

const HomeImmersive = () => {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 className="font-sketch">for Canvas 3D (Three.js)</h1>
      <p>3D Scene with GSAP ScrollTrigger.</p>
      
      <Link to="/" className="sketch-button" style={{ marginTop: '2rem' }}>
        ← Back To Standard Home
      </Link>
    </div>
  );
};

export default HomeImmersive;