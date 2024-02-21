import React from 'react';
import "./Counter.module.css"

const Counter = ({ number, text }) => {
    return (
        <div className="col-sm-4">
            <div className="border-l border-light py-4">
                <h2 className="text-white mb-1">{number}</h2>
                <p className="text-white mb-0">{text}</p>
            </div>
        </div>
    );
};

export default Counter;
