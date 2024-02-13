import React from 'react';
import Image from '../../atoms/Image/Image';
import Title from '../../molecules/Title/Title';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => (
    <div className="container-xxl py-10" id="about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn about-column" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                    <div className="flex flex-col">
                        <Image src="images/about/about-1" alt="" className="rounded w-100 self-end" />
                        <Image src="images/about/about-2" alt="" className="img-fluid rounded w-50 bg-white pt-3 pe-3" style={{ marginTop: '-25%' }} />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn text-center about-column" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                    <SectionTitle title="Quiénes somos" />
                    <Title text="Somos un Centro Médico y de Diagnóstico" className="mb-8"/>
                        <div className="about-txt">
                            <p>
                                Con énfasis en Otorrinolaringología, Traumatología, Medicina General
                                y Pediatría.
                            </p>
                            <p className="mb-8">
                                Entregamos una atención de calidad y equipamiento de punta, que le
                                ofrece a sus pacientes resolver las necesidades de atención
                                médica, imagenología y exámenes de laboratorio, con los mejores
                                profesionales a un precio razonable en el mejor lugar y con
                                instalaciones de primer nivel.
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCheckCircle} className="me-4 far iconCheck fa-lg" />
                                Atenciones de Calidad
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCheckCircle} className="me-4 far iconCheck fa-lg" />
                                Profesionales Cualificados
                            </p>
                            <div className='!mt-12'>
                                <a className="btn btn-primary rounded-pill !py-3 !px-12  !inline !w-[30%]" href="about.html">Leer Más</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;
