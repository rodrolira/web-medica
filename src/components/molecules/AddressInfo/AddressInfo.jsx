import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./AddressInfo.css"

const AddressInfo = () => {
    return (
        <div className="box-address inline-flex items-center ms-4" >
            <big className="fa lg:ms-0 md:ms-3 fa-map-marker-alt text-white icon-address" aria-hidden="true">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </big>
            <a className="fs-6 lg:!ms-4 md:!ms-0 btn-address" href="contact.html">
                <small className="top-bar address" id="direccion">Address 020, City</small>
            </a>
        </div>
    );
};

export default AddressInfo;
