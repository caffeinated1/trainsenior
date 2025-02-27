import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add a catch-all route that redirects to home */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 