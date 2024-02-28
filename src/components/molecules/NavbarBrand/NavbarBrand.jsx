// NavbarBrand.jsx
import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import "./NavbarBrand.css"
import { Link } from 'react-router-dom';

const NavbarBrand = () => {
    return (
        <Link to={"/"} className="navbar-brand flex">
            <Logo />
        </Link>
    );
};

export default NavbarBrand;
