import React from 'react';
import "./Title.css";
const Title = ({ text, color }) => (
    <h1 className={`text-4xl mb-6 ${color && `text-${color}`}`} >
        {text}
    </h1>
);

export default Title;
