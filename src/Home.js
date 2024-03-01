import React from "react";

const Home = () => {
  const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
  };

  const overlayStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };

  const headingStyles = {
    fontSize: '3rem', 
    marginBottom: '20px',
    fontFamily: 'Impact, sans-serif', // Change font family
    animation: 'fadeInUp 2s ease-out', // Add animation for the heading
  };

  const paragraphStyles = {
    fontSize: '2rem', // Adjusted font size
    maxWidth: '500px',
    margin: '0 auto 30px',
    fontFamily: 'Verdana, sans-serif', // Change font family
    animation: 'fadeInUp 10s ease-out', // Add animation for the paragraph
  };

  return (
    <div style={containerStyles}>
      <div style={overlayStyles}>
        <h1 style={headingStyles}>Hi, I am Charisse Casilihan</h1>
        <p style={paragraphStyles}>Photography makes us happy. Let's take a shot! 
        <br></br></p>
        <p style={{ 
          textAlign: 'center', 
          fontFamily: 'Arial', 
          fontSize: '18px', 
          color: 'white', 
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          animation: 'fadeInUp 2s ease-out' // Add animation for the paragraph
        }}>
          This webpage offers a glimpse into my world, passions, and interests, 
          featuring articles on technology, creativity, and personal anecdotes. 
          Join me on a virtual adventure to explore knowledge and imagination.
        </p>
      </div>
    </div>
  );
};

export default Home;
