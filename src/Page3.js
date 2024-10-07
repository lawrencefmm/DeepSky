import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page3.css'; // Import the CSS file

function Page3() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page4');
  };

  return (
      <div className="third-container">

      <div className="third-screen">
        <div className="header">
            <h1>What is the Gaia DR3 Catalog?</h1>
            <p>Have you ever tried counting the stars in the sky? It’s impossible to count them all because there are billions of stars just in our galaxy alone! That’s where Gaia comes in. Gaia is a space mission by the European Space Agency that’s been mapping the positions of over a billion stars! Scientists use Gaia’s data to learn where stars are, how bright they are, and even how fast they’re moving through space.</p>
            <p>Gaia DR3 is the latest version of this star map, and it contains super-detailed information about all those stars. Thanks to Gaia, we can now see where the stars are not only from Earth but also from distant exoplanets! DeepSky uses this incredible data to show you what the night sky would look like from over 5,700 exoplanets.</p>
            <p>Fun Fact: The Gaia mission is still going, and it keeps finding more stars and improving its map. One day, we might know the location of nearly every star in our galaxy!</p>
            <button className="button" onClick={handleClick}>  
                Next
            </button>
        </div>
      </div>
    </div>
  );
}

export default Page3;


