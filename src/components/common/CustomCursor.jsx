import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.nav-left')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '24px',
        height: '24px',
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px) ${isHovering ? 'scale(1.5) rotate(-15deg)' : 'scale(1)'}`,
        transition: 'transform 0.1s ease-out',
        zIndex: 9999,
        fontSize: '1.5rem',
        lineHeight: 1,
      }}
    >
      ✏️
    </div>
  );
};

export default CustomCursor;