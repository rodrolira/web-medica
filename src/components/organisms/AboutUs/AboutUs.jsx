import React, { useEffect } from 'react';
import Title from '../../molecules/Title/Title';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MissionVisionSection from '../MissionVisionSection/MissionVisionSection';

const AboutUs = () => {
    useEffect(() => {
        const aboutElement = document.getElementById('about');
        if (!aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="container-xxl py-10" id="about">
            <div className="container">
                <div className="row g-5">
                    <MissionVisionSection />

                    <div className="col-lg-6 wow fadeIn text-center about-column" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                        <SectionTitle title="Quiénes somos" />
                        <Title text="Somos un Centro Médico y de Diagnóstico" className="mb-8" />
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
                                <Link to="/about" className="btn bg-primary !text-white !btn-primary rounded-pill !py-3 !px-12  !inline">Leer Más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
