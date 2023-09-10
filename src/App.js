import React,{useState} from 'react';
import LoadingPage from './LoadingPage';
import Form from './Form';
import StyleMeButton from './StyleMeButton';
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`App flex flex-col ${darkMode ? "dark" : ""}`}>
      <nav className='flex justify-between px-1 py-2 bg-gradient-to-r from-purple-950 to-purple-800'>
      <StyleMeButton />
      <h1 className='font-bold text-xl text-white self-center '>Fill The Form To Get Surprise!</h1>
      <button className='bg-purple-900 shadow-sm shadow-black px-2 text-white py-2 rounded-md' onClick={toggleDarkMode}>{darkMode? "Switch To light":"Switch To dark"}</button>
      </nav>
      <LoadingPage />
      <Form />
    </div>
  );
}

export default App;
