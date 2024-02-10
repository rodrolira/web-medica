import React from 'react';

import './TopBar.css';
import SocialButtons from '../../molecules/SocialButtons/SocialButtons';
import AddressInfo from '../../molecules/AddressInfo/AddressInfo';
import ScheduleInfo from '../../molecules/ScheduleInfo/ScheduleInfo';
import ScheduleAppointment from '../../molecules/ScheduleAppointment/ScheduleAppointment';

const TopBar = () => {
  return (
    <div className="bg-primary p-0 wow fadeIn container-fluid container-topbar flex w-full" data-wow-delay="0.1s">
      <div className=" top-bar border-box-1 !w-fit">
        <AddressInfo />
      </div>
      <div className="top-bar border-box-1 w-full">
        <ScheduleInfo />
      </div>
      <div className="top-bar border-box-1 justify-center !block w-[50%]">
        <ScheduleAppointment />
      </div>
      <div className="top-bar  ">
        <SocialButtons />
      </div>
    </div>
  )

}
export default TopBar;
