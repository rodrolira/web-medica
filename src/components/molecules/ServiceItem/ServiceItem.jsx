import React from 'react';
import "./ServiceItem.css";

import Icon from '../../atoms/Icon/Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono correctamente

const ServiceItem = ({ icon, title, description, listItems, link }) => (
    <div className="col-lg-3 col-md-6 wow fadeInUp column-services p-5" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
        <div className="service-item rounded h-100 p-12 box-especialidades">
            <div className="inline-flex items-center justify-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <Icon icon={icon} color="primary" size="3xl" /> {/* Pasar el ícono como una propiedad */}
            </div>
            <h4 className="mb-3 text-2xl">{title}</h4>
            <p className="mb-4 service-txt">{description}</p>
            <ol className='service-txt ms-8'>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
            <a className="btn btn-light dropdown-column" href={link}>
                <Icon cla icon={faPlus} color="primary" size="3" /><span className='ms-3'>Ver Más</span></a> {/* Pasar el ícono como una propiedad */}
        </div>
    </div>
);

export default ServiceItem;
