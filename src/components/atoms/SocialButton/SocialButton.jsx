import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SocialButton.css"

const SocialButton = ({ icon, href }) => {
    return (
        <a className="btn btn-sm-square rounded-circle bg-white icon-rrss me-1" href={href}>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default SocialButton;
