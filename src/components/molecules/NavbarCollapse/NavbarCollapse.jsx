// NavbarCollapse.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NavbarCollapse = () => {
    return (
        <div className="btn-collapse">
            <button type="button" name="menu" className="navbar-toggler me-4" style={{ backgroundColor: '#fbfcffe3' }} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    {/* Add other navigation links here */}
                    {/* ... */}

                    {/* SISTEMA DE LOGIN */}
                    {/* <Link to="login.html" className="btn btn-primary rounded-0 d-none d-lg-block text-center">
            Iniciar Sesión &nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </Link> */}
                    <a href="/" className="btn btn-primary rounded-0 d-none d-lg-block text-center">
                        ¡AGENDA TU HORA! &nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavbarCollapse;
