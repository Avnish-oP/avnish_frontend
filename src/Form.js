import React, { useState } from 'react';
// import "./App.css";
import Popup from './Popup';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div>
    <div className="form flex flex-col h-[50vh] w-[22vw] mx-auto mt-[10vh] justify-center gap-4 font-medium items-center shadow-purple-500 shadow-lg glow-form style-me-form">
      <h1 className='text-xl '>Signup Here</h1>
    <form className='flex items-center  flex-col gap-2' onSubmit={handleSubmit}>
      <input
        className='border-2 border-gray-400 rounded-md px-2 py-1'
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
      className='border-2 border-gray-400 rounded-md px-2 py-1'
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
      className='border-2 border-gray-400 rounded-md px-2 py-1'
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <button className='bg-purple-900 shadow-sm shadow-black px-2 text-white py-2 rounded-md' type="submit">Submit</button>
    </form>
    {showPopup && (
        <Popup name={formData.name} onClose={closePopup} />
      )}
    </div>
    </div>
  );
};

export default Form;
