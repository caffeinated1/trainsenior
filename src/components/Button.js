import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button 
      className={`button ${className}`} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  );
};

export default Button; 