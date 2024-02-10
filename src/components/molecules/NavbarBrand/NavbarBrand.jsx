// NavbarBrand.jsx
import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import { Link } from 'react-router-dom'; // Make sure to import Link if using React Router

const NavbarBrand = () => {
    return (
        <Link to="/" className="navbar-brand d-flex align-items-center">
            <Logo />
        </Link>
    );
};

export default NavbarBrand;
