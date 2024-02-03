// Spinner.jsx
import React, { useState, useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import './Spinner.css';

function CustomSpinner({ onLoadingComplete }) {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        // Simula un tiempo de carga, puedes ajustarlo según tus necesidades
        const loadingTimeout = setTimeout(() => {
            setShowSpinner(false);
            // Llama a la función proporcionada para indicar que la carga ha finalizado
            onLoadingComplete();
        }, 3000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(loadingTimeout);
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 show  ${showSpinner ? 'opacity-100' : 'opacity-0 hidden'}`}
        >
            <Spinner className='w-32 h-32 z-50 overflow-hidden' color="success" aria-label="Default status example" />
        </div>
    );
}

export default CustomSpinner;
