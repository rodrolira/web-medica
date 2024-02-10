// NavbarBrand.jsx
import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import "./NavbarBrand.css"

const NavbarBrand = () => {
    return (
        <a href="/" className="navbar-brand d-flex align-items-center">
            <Logo />
        </a>
    );
};

export default NavbarBrand;
