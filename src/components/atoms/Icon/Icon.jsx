import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faS } from '@fortawesome/free-solid-svg-icons';

library.add(faS);

const Icon = ({ name, color, size }) => (
    <FontAwesomeIcon icon={['fas', name]} className={`text-${color} text-${size}`} />
);

export default Icon;

