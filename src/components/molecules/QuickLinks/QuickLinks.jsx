import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const QuickLinks = () => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-white mb-4 text-xl">Enlaces Directos</h5>
        <Link to="about" className="btn btn-link"> <Icon icon={faAngleRight} />Sobre Nosotros</Link>
        <Link to="/about" className="btn btn-link"> <Icon icon={faAngleRight} />Contáctenos</Link>
        <Link to="/about" className="btn btn-link"> <Icon icon={faAngleRight} />Especialidades</Link>
        <Link to="/about" className="btn btn-link"> <Icon icon={faAngleRight} />Médicos</Link>
        <Link to="/about" className="btn btn-link"> <Icon icon={faAngleRight} />Agendar Cita</Link>
    </div>
);

export default QuickLinks;
