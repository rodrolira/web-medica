import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/Icon/Icon';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "./ContactSection.css"
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

const ContactSection = () => {
    return (
        <div className="container-xxl py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row g-4  gap-4">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 col-lg-4">
                        <div className="h-full bg-light rounded flex items-center p-12">
                            <div className="flex-shrink-0 flex items-center justify-center rounded-[50%] bg-white w-14 h-14">
                                <Icon icon={faMapMarker} color={"primary"} aria-hidden="true" />
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Dirección</p>
                                <h5 className="mb-0">Pucará 020, Machalí</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 col-lg-4">
                        <div className="h-full bg-light rounded flex items-center p-12">
                            <div className="flex-shrink-0 flex items-center justify-center rounded-[50%] bg-white w-14 h-14">
                                <Icon icon={faPhoneAlt} color={"primary"} aria-hidden="true" />
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Llámanos Ahora!</p>
                                <h5 className="mb-0">+56 2 25827477</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 col-lg-4">
                        <div className="h-full bg-light rounded flex items-center p-12">
                            <div className="flex-shrink-0 flex items-center justify-center rounded-[50%] bg-white w-14 h-14">
                                <Icon icon={faEnvelopeOpen} color={"primary"} aria-hidden="true" />
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Envíenos un correo</p>
                                <h5 className="mb-0 fs-6">centronuevo2019@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-6  wow fadeIn text-center" data-wow-delay="0.1s">
                        <div className="bg-light rounded-lg p-12">
                            <SectionTitle title="Contactanos" subtitle="Estamos para ayudarte!" />
                            <h1 className="mb-4">¿Tienes alguna pregunta?</h1>
                            <div className="flex">
                                <Link to="https://wa.me/5211234567890?text=Hola, tengo una duda!" className="whatsapp" target="_blank" rel="noreferrer">
                                    <Icon icon={faWhatsapp} className="whatsapp-icon" aria-hidden="true" />
                                    <p className="fw-bold" id="txt-wsp">
                                        Escríbenos a nuestro WhatsApp!!
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  wow fadeIn" data-wow-delay="0.5s">
                        <div className="h-full w-full min-h-[400px]">
                            <iframe className="rounded-lg w-full h-full" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.796087456178!2d-70.70250408478171!3d-34.17713078057223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966345286abd3a6d%3A0x8b5812f73b92cd72!2sCentro%20Medico%20Nueva%20Salud!5e0!3m2!1ses-419!2scl!4v1660974872373!5m2!1ses-419!2scl" allowFullScreen="" aria-hidden="false" tabIndex="0" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;
