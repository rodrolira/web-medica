import React from 'react';
import "./ServicesLinks.css";
import Icon from '../../atoms/Icon/Icon';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



const ServicesLinks = () => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-white mb-4  text-xl">Servicios</h5>
        <a className="btn btn-link" href="especialidades/otorrino.html">  <Icon icon={faAngleRight}/>Otorrinolaringología</a>
        <a className="btn btn-link" href="especialidades/pediatria.html"> <Icon icon={faAngleRight}/>Pediatría</a>
        <a className="btn btn-link" href="neurologia-infantil.html"> <Icon icon={faAngleRight}/>Neurología Infantil</a>
        <a className="btn btn-link" href="traumatologia.html"> <Icon icon={faAngleRight}/>Traumatología</a>
        <a className="btn btn-link" href="medicina-general.html"> <Icon icon={faAngleRight}/>Medicina General Adulto</a>
        <a className="btn btn-link" href="psicologia.html"> <Icon icon={faAngleRight}/>Psicología</a>
        <a className="btn btn-link" href="psiquitatria-infantojuvenil.html"> <Icon icon={faAngleRight}/>Psiquiatría Infantojuvenil</a>
        <a className="btn btn-link" href="cirugia-infantil.html"> <Icon icon={faAngleRight}/>Cirugía Infantil</a>
        <a className="btn btn-link" href="obstetricia.html"> <Icon icon={faAngleRight}/>Obstetricia</a>
        <a className="btn btn-link" href="gastro.html"> <Icon icon={faAngleRight}/>Gastroenterología</a>

    </div >
);

export default ServicesLinks;
