import React from "react";

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AgendaButton = () => {
    return (
        <NavLink to='/appointment' activeClassName="active" className=" btn-primary w-full font-medium  my-auto text-base  text-center">
            ¡AGENDA TU HORA! &nbsp;
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </NavLink>
    );
};

export default AgendaButton;
