import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import VideoCallPage from './pages/VideoCallPage';
import './styles/global.css'; // Ensure global styles are imported

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/video-call" element={<VideoCallPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 