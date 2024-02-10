// Navbar.jsx
import React from 'react';
import NavbarBrand from '../../molecules/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../../molecules/NavbarCollapse/NavbarCollapse';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
            <NavbarBrand />
            <NavbarCollapse />
        </nav>
    );
};

export default Navbar;
