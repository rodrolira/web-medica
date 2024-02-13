import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import './FeatureItem.css';

const FeatureItem = ({ icon, title, description }) => (
    <div className="col-lg-6">
        <div className="flex mt-5 px-5">
            <div className="flex flex-shrink-0 items-center justify-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                <Icon icon={icon} color="primary" size="4" />
            </div>
            <div className="ms-4 col-feature">
                <p className="text-white mb-2 border rounded-pill text-center w-100">{title}</p>
                <h5 className="text-white mb-0 text-xl">{description}</h5>
            </div>
        </div>
    </div>
);

export default FeatureItem;
