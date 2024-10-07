import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page4.css'; // Import the CSS file

function Page4() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page3');
  };

  return (
      <div className="fourth-container">

      <div className="fourth-screen">
        <div className="header">
            <h1>Create Your Own Constellations!</h1>

            <p>In DeepSky, not only can you explore the stars, but you can also get creative and make your own constellations! Just like how ancient people saw shapes in the night sky and made stories about them, you can connect stars to form your own patterns. Will you make a dragon? A rocket ship? It’s up to your imagination!</p>

<p>Fun Challenge: Try to recreate one of the famous constellations we see from Earth, like the Big Dipper, and then invent a new one of your own!</p>
<a href="https://thiago4532.github.io/ExoSky/" button className="buttonXD">  
               Take me to the sky! 
            </a>
        </div>
      </div>
    </div>
  );
}

export default Page4;


