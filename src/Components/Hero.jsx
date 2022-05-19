import React from 'react';
import '../Styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-section container-padding'>
      <div className="hero-content ">
        <h1 className='hero-text pt-5'>IT DOESN'T GET EASIER. <br />
          YOU GET BETTER.</h1>
        <button className="hero-btn mt-4">View All Challenges</button>
      </div>
    </div>
  );
};

export default Hero;