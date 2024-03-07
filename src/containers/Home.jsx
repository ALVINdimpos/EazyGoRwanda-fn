/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar } from '../components';
import HeroSection from '../components/HeroSection';
import SearchNav from '../components/Home/SearchNav';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <SearchNav /> */}
    </div>
  );
};

export default Home;
