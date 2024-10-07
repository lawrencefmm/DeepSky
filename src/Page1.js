import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css'; // Import the CSS file

function Page1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page2');
  };

  return (
      <div className="container">

      <div className="screen">
          <div className="header">
              <h1>What’s an Exoplanet?</h1>

      <p>Exoplanets are planets that orbit stars beyond our own Sun! Imagine all the planets in our solar system, like Earth, Mars, and Jupiter—but located in other parts of the galaxy, orbiting distant stars light-years away.</p>

      <p>NASA Scientists have found over 5,700 exoplanets so far, but they believe there are billions more waiting to be discovered! Some of these planets are like Earth, while others are wildly different—some are bigger than Jupiter, and a few even drift alone in space without a star to orbit. These are called "rogue planets".</p>

<p>At DeepSky, we bring you the chance to explore the skies from the surface of these amazing planets. Get ready to discover the universe beyond our solar system!</p>
            <button className="button" onClick={handleClick}>  
                Next
            </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;


