import React from 'react';

import './TopBar.css';
import SocialButtons from '../../molecules/SocialButtons/SocialButtons';
import AddressInfo from '../../molecules/AddressInfo/AddressInfo';

const TopBar = () => {
  return (
    <div className="bg-primary p-0 wow fadeIn container-fluid container-topbar flex w-full" data-wow-delay="0.1s">
      <div className="row gx-0 w-full  h-topbar">
        <div className="col-lg-7 top-bar border-box-1">
          <AddressInfo />
        </div>
      </div>
      <div className="hidden lg:flex h-topbar container mx-auto">
        <div className="top-bar border-box-1 lg:w-7/12">
          {/* ... (rest of the code for Topbar) */}
        </div>
        <div className="h-topbar w-full lg:w-5/12">
          {/* ... (rest of the code for Topbar) */}
          <SocialButtons />
        </div>
      </div>
    </div>
  )

}
export default TopBar;
