import React from 'react';
import MissionVisionSection from '../../organisms/MissionVisionSection/MissionVisionSection';
import Title from '../../molecules/Title/Title';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import Icon from '../../atoms/Icon/Icon';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutUsSection = () => (
    <div className="container-xxl py-12">
        <div className="container">
            {/* You can add the rest of the content here */}
            <div className="row g-5">
                <MissionVisionSection />
                <div className="col-lg-6 text-center wow fadeIn" data-wow-delay="0.5s">
                    <SectionTitle title="Sobre Nosotros" />

                    <Title text="Somos un Centro Médico y Diagnóstico" className="mb-4" />
                    <div className="m-8 about-txt text-start">
                        <p>
                            Con énfasis en Otorrinolaringología, Traumatología, Medicina General y Pediatría.
                        </p>
                        <p className="mb-4">
                            Entregamos una atención de calidad y equipamiento de punta, que le ofrece a sus pacientes resolver las necesidades de atención médica, imagenología y exámenes de laboratorio, con los mejores profesionales a un precio razonable en el mejor lugar y con instalaciones de primer nivel.
                        </p>
                    </div>

                    <Title text="Misión" className="mb-4" />
                    <div className="m-8 about-txt text-start">
                        <p>
                            Ser líder Regional en prestación de servicios médicos especialmente de Otorrinolaringología y Traumatología, poniendo a disposición de nuestros pacientes a los mejores profesionales, la mejor infraestructura y tecnología en dichas áreas, así como resolver con calidad en equipamiento y procesos las necesidades en exámenes de laboratorio e imagenología que la población de la VI y VII región requiera.
                        </p>
                    </div>


                    <Title text="Visión" className="mb-4" />
                    <div className="m-8 about-txt text-start">
                        <p>
                            Ser un referente nacional en atención ambulatoria en diversas especialidades de la medicina.
                        </p>
                        <div className="flex items-baseline">
                            <Icon icon={faCheckCircle} color={'primary'} />
                            <p className="inline-block ms-3">Atenciones de Calidad</p>
                        </div>
                        <div className="flex items-baseline">
                            <Icon icon={faCheckCircle} color={'primary'} />
                            <p className='inline-block ms-3'>Profesionales Cualificados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

);

export default AboutUsSection;
