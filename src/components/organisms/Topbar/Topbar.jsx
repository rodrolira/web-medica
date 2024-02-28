import React from 'react';

import './Topbar.css';
import SocialButtons from '../../molecules/SocialButtons/SocialButtons';
import AddressInfo from '../../molecules/AddressInfo/AddressInfo';
import ScheduleAppointment from '../../molecules/ScheduleAppointment/ScheduleAppointment';
import AgendaButton from '../../atoms/AgendaButton/AgendaButton';

const Topbar = () => {
  return (
    <div className="sm:hidden md:flex  bg-primary  wow fadeIn container-topbar" data-wow-delay="0.1s">
      <div className=" top-bar border-box-1 flex-1 ">
        <AddressInfo />
      </div>
      <div className="top-bar border-box-1 flex-1 ">
        <ScheduleAppointment />
      </div>
      <div className="top-bar border-box-1 lg:flex-1 md:flex-none md:!w-[20%] justify-center ">
        <SocialButtons />
      </div>
      <div className="top-bar  flex-1 ">
        <AgendaButton />
      </div>
    </div>
  )

}
export default Topbar;
