import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
};

export default Button; 