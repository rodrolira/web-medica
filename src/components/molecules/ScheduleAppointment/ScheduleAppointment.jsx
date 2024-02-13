import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "./ScheduleAppointment.css"

const ScheduleAppointment = () => {
    return (
        <div className="col-lg-5 h-topbar justify-center !w-full">
            <div className="text-center h-topbar box-wsp" id="wsp">
                <a
                    className="text-white h-topbar link-wsp"
                    id="number"
                    href="https://wa.me/5211234567890?text=Hola, quiero agendar una hora!"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-white icon-call" aria-hidden="true" />
                    <p className="number number-box fw-bolder">
                        ¡AGENDA TU HORA AQUÍ!
                        <span className="hiddenText"> &nbsp; &nbsp; +56939229685</span>
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ScheduleAppointment;
