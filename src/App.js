import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page1');
  };

  return (
      <div className="first-container">

      <div className="first-screen">
        <div className="header">
          <h1>Welcome to DeepSky!</h1>
          <p>Imagine what the night sky would look like from another world beyond our own.</p>
          <p>DeepSky brings you a universe of possibilities, allowing you to explore the cosmos.</p>
            <button className="button" onClick={handleClick}>  
                Start Learning
            </button>
            <a href="https://thiago4532.github.io/ExoSky/" button className="button2">                           
                Take me to the sky (Skip Lessons)
             </a>       
        </div>
      </div>
    </div>
  );
}

export default App;

