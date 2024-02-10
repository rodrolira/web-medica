import React from 'react';

const Counter = ({ number, text }) => {
    return (
        <div className="col-sm-4">
            <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1">{number}</h2>
                <p className="text-light mb-0">{text}</p>
            </div>
        </div>
    );
};

export default Counter;
