/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar } from '../components';
import HowItWorks from '../components/HowItWorksSection/HowItWorks';
import HeroSection from '../components/HeroSection';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
