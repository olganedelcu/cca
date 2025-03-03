import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #ff5722;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Welcome to the Era of Badass Empires</h1>
        <p>Join the battle and conquer the world!</p>
        <button>Get Started</button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;