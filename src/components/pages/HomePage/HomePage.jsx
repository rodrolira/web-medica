import React, { useState, useEffect } from 'react';
import CustomSpinner from '../../atoms/Spinner/Spinner';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga, puedes ajustarlo según tus necesidades
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className='text-center h-screen w-full'>
          {loading ? (
              <div className='text-center my-auto'>
        <CustomSpinner size="xl" />

                  </div>
      ) : (
        // Contenido de la página principal cuando la carga ha finalizado
        <div className='h-full w-full'>
          <h1>Bienvenido a mi página principal</h1>
          {/* Otro contenido... */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
