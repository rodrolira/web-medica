import React from 'react';
import Title from '../../molecules/Title/Title';
import ServiceItem from '../../molecules/ServiceItem/ServiceItem';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import "./Specialties.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';


const Specialties = () => (
    <div className="container-xxl py-5" id="service" name="service">
        <div className=" container-services">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                <SectionTitle title="Servicios" />
                <Title text="Especialidades" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Add more ServiceItem components here for each specialty */}
                <ServiceItem
                    icon={<FontAwesomeIcon icon={faHeartbeat} />}
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
                <ServiceItem
                    icon="fa-heartbeat"
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
                <ServiceItem
                    icon="fa-heartbeat"
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
                <ServiceItem
                    icon="fa-heartbeat"
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
                <ServiceItem
                    icon="fa-heartbeat"
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
                <ServiceItem
                    icon="fa-heartbeat"
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
            </div>
        </div>
    </div>
);

export default Specialties;
