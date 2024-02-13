import React from 'react';
import Icon from '../../atoms/Icon/Icon';

const FeatureItem = ({ icon, title, description }) => (
    <div className="col-6 col-feature">
        <div className="d-flex align-items-center">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: '55px', height: '55px' }}>
                <Icon name={icon} color="primary" size="4" />
            </div>
            <div className="ms-4 col-feature">
                <p className="text-white mb-2 border rounded-pill text-center w-100">{title}</p>
                <h5 className="text-white mb-0">{description}</h5>
            </div>
        </div>
    </div>
);

export default FeatureItem;
