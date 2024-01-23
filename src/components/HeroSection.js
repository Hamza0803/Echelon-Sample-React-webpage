import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  
  return (
    <div className='hero-container'>
    <video src='/videos/video-1b.mp4' autoPlay loop muted />
        <h1>ELEVATE YOUR VISION WITH ECHELON DRONES</h1>
        <p>Explore the possibilities with our cutting-edge drone technology</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PROTOCOL 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;