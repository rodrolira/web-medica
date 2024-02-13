import React from 'react';


const ContactInfo = () => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-light mb-4">Dirección</h5>
        <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" aria-hidden="true"></i>Pucará 020, Machalí, Chile
        </p>
        <p className="mb-2">
            <i className="fa fa-phone-alt me-3" aria-hidden="true"></i>+56 9 3922 9685
        </p>
        <p className="mb-2">
            <i className="fa fa-envelope me-3" aria-hidden="true"></i>centronuevo2019@gmail.com
        </p>
        <div className="d-flex pt-2 text-center justify-content-center">
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.facebook.com/centromediconuevasalud">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://twitter.com/centronuevasal1?lang=es">
                <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.instagram.com/centromediconuevasalud/?hl=es">
                <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
        </div>
    </div>
);

export default ContactInfo;
