import React from "react";

import Title from '../../molecules/Title/Title';
import FeatureItem from '../../molecules/FeatureItem/FeatureItem';

const Features = () => (
    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0 text-center container-feature">
        <div className="container feature px-lg-0 h-100">
            <div className="row g-0 mx-lg-0 h-100">
                <div className="col-lg-6 wow fadeIn h-100" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                    <div className="lg:p-5 h-100">
                        <p className="inline-block border rounded-pill text-light py-1 px-4">
                            Porque tu salud nos importa
                        </p>
                        <h1 className="text-white mb-4"><Title text="¿Por qué elegirnos?" /></h1>
                        <p className="text-white mb-4 pb-2">
                            Porque cada uno de nuestro equipo de trabajo está 100%
                            comprometido por la salud de cada paciente.
                        </p>
                        <p className="text-white mb-4 pb-2">
                            Dándoles un servicio de calidad en donde se prioriza el buen
                            trato hacia ellos, haciéndolos sentir cómodos y seguros de
                            nuestra labor.
                        </p>
                        <p className="text-white mb-4 pb-2">
                            Además, cada profesional perteneciente al centro está en un
                            constante aprendizaje según su área en donde se especializan en
                            distintos ámbitos según el ambiente en el que se
                            desenvuelven.
                        </p>

                        <div className="row g-4 col-feature">
                            {/* Add more FeatureItem components here for each feature */}
                            <FeatureItem
                                icon="fa-user-md"
                                title="Médicos"
                                description="100% Comprometidos con el Paciente"
                            />
                            <FeatureItem
                                icon="fa-check"
                                title="Servicio"
                                description="De Calidad"
                            />
                            <FeatureItem
                                icon="fa-comment-medical"
                                title="Consultas"
                                description="Con los mejores Profesionales de la Salud"
                            />
                            <FeatureItem
                                icon="fa-headphones"
                                title="9:00 AM - 19:30 AM"
                                description="SOPORTE VÍA WHATSAPP"
                            />
                            {/* Repeat the above structure for other features */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px', height: '100%', visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                    <div className="relative h-full">
                        <img loading="lazy" className="img-fluid w-full h-full img-feature" src="img/nueva_salud_tv/agenda_tu_hora_medica_3.jpg" alt="Agenda Online" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Features;
