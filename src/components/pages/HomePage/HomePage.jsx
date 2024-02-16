import React, { useEffect } from 'react';
import Header from '../../templates/Header/Header';
import AboutUs from '../../organisms/AboutUs/AboutUs';
import Specialties from '../../organisms/Specialties/Specialties';
import Features from '../../organisms/Features/Features';
import TeamSection from '../../organisms/TeamSection/TeamSection';
import Footer from '../../templates/Footer/Footer';

const HomePage = () => {
  useEffect(() => {
    const aboutElement = document.getElementById('home');
    if (!aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='w-full' id='home'>
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
