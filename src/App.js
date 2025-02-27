import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import './styles/global.css';

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <div className="quote-section">
        Strength. Mobility. Longevity.
      </div>
      <Footer />
    </div>
  );
};

export default App; 