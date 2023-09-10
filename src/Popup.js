import React from 'react';
import './App.css'; 

const Popup = ({ name, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Welcome, {name}!</h2>
        <p>Apke sath prank hua hai!</p>
        <button className='bg-purple-900 shadow-sm shadow-black px-2 text-white py-2 rounded-md' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
