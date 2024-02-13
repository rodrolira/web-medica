import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./ScheduleInfo.css"

const ScheduleInfo = () => {
    return (
        <div className="top-horario h-full inline-flex items-center w-full">
            <big className="text-white xl:me-2 icon-clock" aria-hidden="true">
                <FontAwesomeIcon icon={faClock} />
            </big>
            <small className="top-bar h-topbar horario">
                <div className="hora-semana">
                    <p className="txt-horario h-topbar">
                        Lunes - Viernes: 08.00AM - 08.00PM
                    </p>
                    <p className="txt-horario h-topbar">Sábado: 09.00AM - 02.00PM</p>
                </div>
                <b className="uppercase btn-domingo">Domingo y Festivos: CERRADO</b>
            </small>
        </div>
    );
};

export default ScheduleInfo;
