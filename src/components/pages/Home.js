import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
 /// console.log('Home component rendered'); // Add this line to check if Home component is rendering

  return (
    <>
      <HeroSection />            
      <Footer/>
    </>
  );
}

export default Home;