import React from 'react';

import './TopBar.css';
import SocialButtons from '../../molecules/SocialButtons/SocialButtons';

const TopBar = () => {
  return (
    <div className="bg-light bg-blue p-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="hidden lg:flex h-tpbar container mx-auto">
        <div className="top-bar border-box-1 lg:w-7/12">
          {/* ... (rest of the code for Topbar) */}
        </div>
        <div className="h-topbar lg:w-5/12">
          {/* ... (rest of the code for Topbar) */}
          <SocialButtons />
        </div>
      </div>
    </div>
  )

}
export default TopBar;
