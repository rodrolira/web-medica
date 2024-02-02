import React from 'react';
import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import './Navbar.css';

const CustomNavbar = () => (
  <FlowbiteNavbar
    expand="lg"
    className="bg-white sticky top-0 p-0 wow fadeIn"
    data-wow-delay="0.1s"
  >
    {/* ... (rest of the code for Navbar) */}
  </FlowbiteNavbar>
);

export default CustomNavbar;
