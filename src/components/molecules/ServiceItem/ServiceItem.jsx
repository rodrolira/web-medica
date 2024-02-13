import React from 'react';
import "./ServiceItem.css";

import Icon from '../../atoms/Icon/Icon';
const ServiceItem = ({ icon, title, description, listItems, link }) => (
    <div className="col-lg-4 col-md-6 wow fadeInUp column-services p-5" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
        <div className="service-item rounded h-100 p-12 box-especialidades">
            <div className="inline-flex items-center justify-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <Icon name={icon} color="primary" size="4" />
            </div>
            <h4 className="mb-3 text-2xl">{title}</h4>
            <p className="mb-4 service-txt">{description}</p>
            <ol className='service-txt ms-8'>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
            <a className="btn btn-light dropdown-column" href={link}><Icon name="fa-plus" color="primary" size="3" />Ver Más</a>
        </div>
    </div>
);

export default ServiceItem;
