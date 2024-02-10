import React from 'react';

import './TopBar.css';
import SocialButtons from '../../molecules/SocialButtons/SocialButtons';
import AddressInfo from '../../molecules/AddressInfo/AddressInfo';

const TopBar = () => {
  return (
    <div className="bg-primary p-0 wow fadeIn container-fluid container-topbar flex w-full" data-wow-delay="0.1s">
      <div className=" top-bar border-box-1">
        <AddressInfo />
      </div>
      <div className="top-bar border-box-1 ">
        {/* ... (rest of the code for Topbar) */}
      </div>
      <div className="top-bar border-box-1 ">
        {/* ... (rest of the code for Topbar) */}
      </div>
      <div className="top-bar  ">
        {/* ... (rest of the code for Topbar) */}
        <SocialButtons />
      </div>
    </div>
  )

}
export default TopBar;
