// Navbar.jsx
import React from 'react';
import NavbarBrand from '../../molecules/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../../molecules/NavbarCollapse/NavbarCollapse';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar items-center flex bg-white navbar-light sticky top-0 p-0 animate__animated animate__fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
            <NavbarBrand />
            <NavbarCollapse />
        </nav>
    );
};

export default Navbar;
