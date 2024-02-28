import React from 'react';
import Topbar from '../Topbar/Topbar';
import Navbar from '../Navbar/Navbar';

const MenuHeader = () => {
    return (
        <div className = 'fixed w-full z-50'>
            <Topbar />
            <Navbar />
        </div>
    );
};

export default MenuHeader;
