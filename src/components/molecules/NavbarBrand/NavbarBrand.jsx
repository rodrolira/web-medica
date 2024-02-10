// NavbarBrand.jsx
import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import "./NavbarBrand.css"

const NavbarBrand = () => {
    return (
        <a href="index.html" className="navbar-brand flex items-center">
            <Logo />
        </a>
    );
};

export default NavbarBrand;
