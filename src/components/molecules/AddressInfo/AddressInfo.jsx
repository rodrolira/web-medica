import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./AddressInfo.css"

const AddressInfo = () => {
    return (
        <div className="inline-flex items-center w-full !justify-center box-address px-2">
            <big className="fa fa-map-marker-alt text-white icon-address" aria-hidden="true">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </big>
            <a className="fs-6 btn-address" href="contact.html">
                <small className="top-bar address" id="direccion">Pucará 020, Machalí</small>
            </a>
        </div>
    );
};

export default AddressInfo;
