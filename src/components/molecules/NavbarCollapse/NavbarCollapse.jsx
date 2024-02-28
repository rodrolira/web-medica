// NavbarCollapse.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarCollapse.css'
import Icon from '../../atoms/Icon/Icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavbarCollapse = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };
    return (
        <div className='flex w-full items-center h-full' id="navbarCollapse">
            <ul className="navbar-nav flex h-full items-center w-full ml-auto">
                <li className="nav-item">
                    <NavLink to='/' activeClassName="active" className="nav-link md:!text-sm ">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="about" activeClassName="active" className="nav-link md:!text-sm">Sobre Nosotros</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="services" activeClassName="active" className="nav-link md:!text-sm text-service">Especialidades Médicas</NavLink>
                </li>
                <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='flex items-center cursor-pointer'>
                        <span className="nav-link md:!text-sm dropdown-toggle">Ver Más &nbsp;
                            <Icon icon={faAngleDown} ></Icon></span>
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-menu rounded-b m-0">
                            <NavLink to='/pathologies' activeClassName="active" className="dropdown-item">Patologías</NavLink>
                            <NavLink to='/specialists' activeClassName="active" className="dropdown-item">Nuestros Especialistas</NavLink>
                            <NavLink to='/appointment' activeClassName="active" className="dropdown-item">Agendar Cita</NavLink>
                            <NavLink to='/orl-exams' activeClassName="active" className="dropdown-item">Examenes ORL</NavLink>
                            <NavLink to='/404' activeClassName="active" className="dropdown-item">404 Page</NavLink>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <NavLink to='contact' activeClassName="active" className="nav-link md:!text-sm">Contacto</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavbarCollapse;
