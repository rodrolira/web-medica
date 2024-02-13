import React, { useState, useEffect } from 'react';
import CustomSpinner from '../../atoms/Spinner/Spinner';
import Topbar from '../../organisms/Topbar/Topbar';
import MenuHeader from '../../organisms/MenuHeader/MenuHeader';
import Header from '../../templates/Header/Header';
import AboutUs from '../../organisms/AboutUs/AboutUs';
import Specialties from '../../organisms/Specialties/Specialties';
import Features from '../../organisms/Features/Features';
import TeamSection from '../../organisms/TeamSection/TeamSection';
import Footer from '../../templates/Footer/Footer';

const HomePage = () => {

  return (
    <div className='w-full'>
      <MenuHeader />
      <Header />
      <AboutUs />
      <Specialties />
      <Features />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default HomePage;
