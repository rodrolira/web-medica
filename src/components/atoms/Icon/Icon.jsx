import React from 'react';
import "./Icon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, color, size }) => (
    <FontAwesomeIcon icon={icon} className={`text-${color} text-${size}`} />
);

export default Icon;
