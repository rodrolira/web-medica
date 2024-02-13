// App.jsx
import React, { useState } from 'react';
import './App.css';  // Asegúrate de importar tus estilos si los tienes
import CustomSpinner from './components/atoms/Spinner/Spinner';

import HomePage from './components/pages/HomePage/HomePage';
import MenuHeader from './components/organisms/MenuHeader/MenuHeader';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Función que se llama cuando la carga ha finalizado
  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
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
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default App;
