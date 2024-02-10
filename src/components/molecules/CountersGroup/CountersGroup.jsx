import React from 'react';
import Counter from '../../atoms/Counter/Counter';
import './CountersGroup.css';

const CountersGroup = () => {
    return (
        <div className="counter-header h-full font-bold row g-4">
            <Counter number={27} text="Médicos" />
            <Counter number={11} text="Profesionales de Otra Áreas" />
            <Counter number={19772} text="Total de Pacientes" />
        </div>
    );
};

export default CountersGroup;
