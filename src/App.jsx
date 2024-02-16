// App.jsx
import React, { useState } from 'react';
import './App.css';  // Asegúrate de importar tus estilos si los tienes
import CustomSpinner from './components/atoms/Spinner/Spinner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MenuHeader from './components/organisms/MenuHeader/MenuHeader';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import ServicesPage from './components/pages/ServicesPage/ServicesPage';
import ContactPage from './components/pages/ContactPage/ContactPage';

const App = () => {

  const [loadingComplete, setLoadingComplete] = useState(false);

  // Función que se llama cuando la carga ha finalizado
  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <Router>

      <div className="App">

        {/* Renderiza el componente CustomSpinner solo si la carga no ha finalizado */}
        {!loadingComplete && (
          <div className={`show transition-opacity duration-1000 ${loadingComplete ? 'opacity-0 hidden' : 'opacity-100'}`}>
            <CustomSpinner onLoadingComplete={handleLoadingComplete} />
          </div>
        )}

        {loadingComplete && (
          <div className={`transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0 hidden'}`}>
            {/* Otros elementos o componentes que puedas tener en la aplicación */}
            <MenuHeader />
            <Routes >
              {/*Configura las Rutas*/}
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
