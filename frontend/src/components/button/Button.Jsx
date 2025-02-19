import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
