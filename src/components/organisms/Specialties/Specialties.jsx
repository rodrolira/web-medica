import React from 'react';
import Title from '../../molecules/Title/Title';
import ServiceItem from '../../molecules/ServiceItem/ServiceItem';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import "./Specialties.css";
import { faHeartbeat, faBaby, faBrain, faCrutch, faHeadSideVirus, faStethoscope } from '@fortawesome/free-solid-svg-icons';


const Specialties = () => (
    <div className="container-xxl py-12" id="service" name="service">
        <div className=" container-services">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                <SectionTitle title="Servicios" />
                <Title text="Especialidades" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {/* Add more ServiceItem components here for each specialty */}
                <ServiceItem
                    icon={faHeartbeat}
                    title="Otorrinolaringología (Adulto e Infantil)"
                    description="Enfocados en el tratamiento de patologías asociadas al oído, nariz y cavidades paranasales, cavidad oral, faringe y laringe."
                    listItems={['Hipoacusia (disminución auditiva).', 'Rinitis.', 'Apnea del sueño.', 'Otitis.', 'Amigdalitis.', 'Fracturas nasales.', 'Mareos y vértigo.']}
                    link="especialidades/otorrino.html"
                />
                <ServiceItem
                    icon={faBaby}
                    title="Pediatría"
                    description="
                Especializados tanto en pacientes recién nacidos como también
                niños de 14 años, encargandose de multiples dolencias,
                resfriados de distinto indoles. Como También nos preocupamos de
                enseñar a los padres sobre como actuar ante estas, sobre todo en
                recién nacidos."
                    link="/"
                />
                <ServiceItem
                    icon={faBrain}
                    title="Neurología Infantil"
                    description="Especializado en tratar trastornos mentales las cuales pueden venir desde la conceción como el Autismo, Sindrome de Asperger. Como también trastornos desarrollados durante la niñez como es el caso del TDAH."
                    link="/"
                />
                <ServiceItem
                    icon={faCrutch}
                    title="Traumatología y Ortopedia de Adulto"
                    description="Especialidad que se encarga en el estudio de afecciones de los musculos y del esqueleto como tambien lesiones, fracturas y hasta de enfermedades congenitas como la artrosis. Este campo tiene una variedad de sub-especialidades. Las cuales nosotros contamos con especialistas en Hombro/Codo, Rodilla, Cadera, y en su defecto Traumatologos Generales que ven toda parte del cuerpo."
                    link="/"
                />
                <ServiceItem
                    icon={faHeadSideVirus}
                    title="Psicología"
                    description="Estamos especializados en el manejo y tratamiento, tanto médico como quirúrgico, de pacientes con enfermedades y alteraciones del oído, nariz, garganta y estructuras relacionadas de la cabeza y del cuello."
                    link="/"
                />
                <ServiceItem
                    icon={faStethoscope}
                    title="Kinesiología y Quiropraxia"
                    description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet."
                    link="/"
                />
            </div>
        </div>
    </div>
);

export default Specialties;
