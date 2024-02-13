import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const QuickLinks = () => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-white mb-4 text-xl">Enlaces Directos</h5>
        <a className="btn btn-link" href="about.html"> <Icon icon={faAngleRight} />Sobre Nosotros</a>
        <a className="btn btn-link" href="contact.html"> <Icon icon={faAngleRight} />Contáctenos</a>
        <a className="btn btn-link" href="service.html"> <Icon icon={faAngleRight} />Especialidades</a>
        <a className="btn btn-link" href="team.html"> <Icon icon={faAngleRight} />Médicos</a>
        <a className="btn btn-link" href="appointment.html"> <Icon icon={faAngleRight} />Agendar Cita</a>
    </div>
);

export default QuickLinks;
