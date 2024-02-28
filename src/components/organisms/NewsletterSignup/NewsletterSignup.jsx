// NewsletterSignup.jsx
import React from 'react';
import "./NewsletterSignup.css";
const NewsletterSignup = () => (
    <div className="col-md-6 mt-10 info text-center">
        <h5 className="text-white mb-4 text-xl">Boletín Informativo</h5>
        <p>
            Si quieres saber de los primeros cuando hay agenda disponible,
            ingrese su email
        </p>
        <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
            <input className="form-control border-0 text-center w-full py-3 ps-4 pe-5" type="text" placeholder="Tu email" />
            <button type="button" className="btn btn-primary py-2 absolute top-0 end-0">
                Inscríbete
            </button>
        </div>
    </div>
);

export default NewsletterSignup;
