import React, { useState, useEffect } from 'react';
import './App.css';
import CustomSpinner from './components/atoms/Spinner/Spinner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MenuHeader from './components/organisms/MenuHeader/MenuHeader';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import ServicesPage from './components/pages/ServicesPage/ServicesPage';
import ContactPage from './components/pages/ContactPage/ContactPage';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setLoadingComplete(true);
  }, []);

  return (
    <Router>
      <div className="App">
        {!loadingComplete && (
          <CustomSpinner />
        )}
        {loadingComplete && (
          <div>
            <MenuHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path='services' element={<ServicesPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
