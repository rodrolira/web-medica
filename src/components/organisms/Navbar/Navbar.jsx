// Navbar.jsx
import React from 'react';
import NavbarBrand from '../../molecules/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../../molecules/NavbarCollapse/NavbarCollapse';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar items-center w-full lg:ps-20 lg:pe-20 md:ps-1 md:pe-1 flex bg-white sticky animate__animated animate__fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
            <NavbarBrand />
            <NavbarCollapse />
        </nav>
    );
};

export default Navbar;
