import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page2.css'; // Import the CSS file

function Page2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Page3');
  };

  return (
      <div className="second-container">

      <div className="second-screen">
        <div className="header">
            <h1>What’s a Star?</h1>

            <p>Look up at the night sky, and you’ll see thousands of tiny, twinkling lights—those are stars! But did you know that each star is actually a gigantic, burning ball of gas, just like our Sun? Stars come in all shapes and sizes, from small and cool red dwarfs to massive, super-bright giants that shine millions of times brighter than the Sun.</p>
<p>How do stars work? Stars are powered by a process called nuclear fusion, where they smash tiny particles together to release lots of energy. This makes stars shine for billions of years! Some stars live for a very long time, while others burn out much faster. The coolest thing? All the stars you see in the sky are light-years away from Earth—so far that their light takes years to reach us!</p>
            <button className="button" onClick={handleClick}>  
                Next
            </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;


