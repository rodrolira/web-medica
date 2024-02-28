import React from 'react';

import './Topbar.css';
import SocialButtons from '../../molecules/SocialButtons/SocialButtons';
import AddressInfo from '../../molecules/AddressInfo/AddressInfo';
import ScheduleAppointment from '../../molecules/ScheduleAppointment/ScheduleAppointment';
import AgendaButton from '../../atoms/AgendaButton/AgendaButton';

const Topbar = () => {
  return (
    <div className="bg-primary  wow fadeIn container-topbar flex  " data-wow-delay="0.1s">
      <div className=" top-bar border-box-1 !w-[50%]">
        <AddressInfo />
      </div>
      <div className="top-bar border-box-1 w-[50%]">
        <ScheduleAppointment />
      </div>
      <div className="top-bar border-box-1 justify-center !block w-[50%]">
        <SocialButtons />
      </div>
      <div className="top-bar w-[50%]  ">
        <AgendaButton />
      </div>
    </div>
  )

}
export default Topbar;
