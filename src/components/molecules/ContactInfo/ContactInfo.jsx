import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const ContactInfo = () => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-white mb-4  text-xl">Dirección</h5>
        <p className="mb-2">
            <Icon icon={faMapMarkerAlt} /> <span className='ms-1'>Address 123, Machalí, Chile</span>
        </p>
        <p className="mb-2">
            <Icon icon={faPhoneAlt} /> <span className='ms-1'>+56 9 1234 5678 </span>
        </p>
        <p className="mb-2">
            <Icon icon={faEnvelope} /><span className='ms-1'>correo@gmail.com</span>
        </p>
        <div className="flex pt-2 text-center justify-center">
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.facebook.com/centromediconuevasalud">
                <Icon icon={faFacebook} />
            </a>
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://twitter.com/centronuevasal1?lang=es">
                <Icon icon={faTwitter} />
            </a>
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.instagram.com/centromediconuevasalud/?hl=es">
                <Icon icon={faInstagram} />
            </a>
        </div>
    </div>
);

export default ContactInfo;
