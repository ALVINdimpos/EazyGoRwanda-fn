/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar } from '../components';
import HeroSection from '../components/HeroSection';
import Footer from './Footer';
import Testimonials from '../components/Testimonials';
import CarpoolSection from '../components/CarpoolSection';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <CarpoolSection />
      <Footer />
    </div>
  );
};

export default Home;
