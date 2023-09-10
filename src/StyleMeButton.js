import React, { useState } from 'react';
import './App.css'; 

const StyleMeButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      className={`text-white  ${clicked ? 'glow style-me-button rounded-md px-2 font-semibold' : ''}`}
      onClick={handleButtonClick}
    >
      Style Me
    </button>
  );
};

export default StyleMeButton;
