import React from 'react';
import HeroSection from '../../components/HeroSection';
import StatsSection from '../../components/StatsSection';
import About from '../../components/About';
import TextileCategories from '../../components/TextileCategories';
import Footer from '../../components/Footer';
const Home = () => {
return(
  <>
    <HeroSection />
    <StatsSection />
    <About />
    <TextileCategories/>
    
  </>
);
  
};

export default Home;