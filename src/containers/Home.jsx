/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar } from '../components';
import HeroSection from '../components/HeroSection';
import EasyGoBenefits from '../components/EasyGoBenefits';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EasyGoBenefits />
      <Footer />
    </div>
  );
};

export default Home;
