import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeStandard from './pages/HomeStandard';

const HomeImmersive = lazy(() => import('./pages/HomeImmersive'));

const FallbackLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontFamily: "'Caveat', cursive",
    fontSize: '2rem'
  }}>
    Loading 3d World
  </div>
);

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<HomeStandard />} />
        <Route 
          path="/story" 
          element={
            <Suspense fallback={<FallbackLoader />}>
              <HomeImmersive />
            </Suspense>
          } 
        />
        
      </Routes>
    </Router>
  );
}

export default App;