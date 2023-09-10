import React, { useState, useEffect } from 'react';
// import "./App.css";
const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black text-white ${loading ? 'block' : 'hidden'}`}>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
