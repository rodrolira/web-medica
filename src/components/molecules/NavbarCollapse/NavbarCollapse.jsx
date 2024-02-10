// NavbarCollapse.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NavbarCollapse = () => {
    return (
        <div className='flex w-full items-center h-full' id="navbarCollapse">
            <ul className="navbar-nav flex items-center h-full w-full ml-auto">
                <li className="nav-item">
                    <a href="index.html" className="nav-link active">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                    <a href="#service" className="nav-link text-service">Especialidades Médicas</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Ver Más...</a>
                    <div className="!hidden dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="patology.html" className="dropdown-item">Patologías</a>
                        <a href="#team" className="dropdown-item">Nuestros Especialistas</a>
                        <a href="appointment.html" className="dropdown-item">Agendar Cita</a>
                        <a href="examens.html" className="dropdown-item">Examenes ORL</a>
                        <a href="404.html" className="dropdown-item hidden">404 Page</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="contact.html" className="nav-link">Contacto</a>
                </li>
                <li className="nav-item w-full">
                    <a href="appointment.html" className="btn btn-primary w-full lg:block text-center">
                        ¡AGENDA TU HORA! &nbsp;
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavbarCollapse;
