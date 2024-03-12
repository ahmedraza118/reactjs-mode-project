// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your Tailwind CSS styles
import classNames from 'classnames';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={classNames('App', { 'dark': darkMode })}>
      <Header/>
      <header className="App-header">
        <h1 className="text-3xl font-bold">Light/Dark Mode Toggle</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <div className="flex justify-center mt-8">
        <div className="mx-4">
          <img
            src={darkMode ? 'https://media.istockphoto.com/id/619503842/photo/wazir-khan-mosque-lahore-pakistan.jpg?s=612x612&w=0&k=20&c=3vrR52_8PkripvQhwP_TOVCW4e9xvv4lIjlSRyPd9Hs=' : 'https://media.istockphoto.com/id/465351958/photo/view-walls-badshahi-mosque-toward-lahore-fort-punjab-pakistan.jpg?s=1024x1024&w=is&k=20&c=sPuLDB0Nw2_LuNvivro-sSTyJikc7q4beVNVu6wbd58='}
            alt="Image 1"
            className="w-64 h-64 rounded-lg shadow-md"
          />
          <p className="mt-2 text-center">{darkMode ? 'Dark Image' : 'Light Image'}</p>
          <p className="text-center">Some content related to Image 1...</p>
        </div>
        <div className="mx-4">
          <img
            src={darkMode ? 'https://media.istockphoto.com/id/891942130/photo/seville-city-skyline-at-sunset.jpg?s=1024x1024&w=is&k=20&c=HgYPFSeZd_ldGGpo-NZ0NxOLCk2lgmvlGd7RWuWP4ik=' : 'https://media.istockphoto.com/id/1895929361/photo/seville-spain-skyline-in-the-historic-center.jpg?s=1024x1024&w=is&k=20&c=MR4ITac65miY2IfFIZ2BGGa5h3TzeYyrSBxP6obYJ2E='}
            alt="Image 2"
            className="w-64 h-64 rounded-lg shadow-md"
          />
          <p className="mt-2 text-center">{darkMode ? 'Dark Image' : 'Light Image'}</p>
          <p className="text-center">Some content related to Image 2...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
