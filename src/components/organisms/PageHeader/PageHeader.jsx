import React from 'react';
import './PageHeader.css';
import { Link } from 'react-router-dom';

const PageHeader = () => {

  return (
    <div className="txt-header index header w-[50%]  page-header bg-primary wow slideInDown animated" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'slideInDown' }}>
      <div className="container py-12">
        <h1 className="display-3 txt-header text-white mb-3 animated slideInDown">
          Centro Médico
        </h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-center text-uppercase mb-0">
            <li className="breadcrumb-item txt-header active">
              <Link className="text-primary" to={"/"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item txt-header">
              <a href="/" className="text-white">Más</a>
            </li>
            <li className="breadcrumb-item txt-header text-white" aria-current="page">
              Sobre Nosotros
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
