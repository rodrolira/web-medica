import React, { useState, useEffect } from 'react';
import "./Counter.module.css"

const Counter = ({ initialNumber, text }) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('Efecto ejecutándose...');
        const interval = setInterval(() => {
            setNumber((prevNumber) => {
                const increment = Math.ceil((initialNumber - prevNumber) / 10); // Ajusta la velocidad aquí
                const newNumber = prevNumber + increment;

                if (newNumber >= initialNumber) {
                    clearInterval(interval); // Detén el intervalo cuando alcanzas el valor inicial
                    console.log('Limpiando intervalo...');
                }

                return newNumber;
            });
        }, 50); // Ajusta la velocidad aquí

        return () => {
            clearInterval(interval);
        };
    }, [initialNumber]);


    return (
        <div className="col-sm-4">
            <div className="border-l !h-full border-light py-4">
                <h2 className="text-white mb-1">{number}</h2>
                <p className="text-white mb-0">{text}</p>
            </div>
        </div>
    );
};

export default Counter;
