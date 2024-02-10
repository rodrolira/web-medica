import React from 'react';
import './PageHeader.css';

const PageHeader = () => {
  return (
    <div className="txt-header index header page-header bg-primary wow slideInDown animated" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'slideInDown' }}>
      <div className="container py-5">
        <h1 className="display-3 txt-header text-white mb-3 animated slideInDown">
          Centro Médico y Diagnóstico Nueva Salud
        </h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb text-uppercase mb-0">
            <li className="breadcrumb-item txt-header active">
              <a className="text-primary" href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item txt-header">
              <a href="/" className="text-white">Más</a>
            </li>
            <li className="breadcrumb-item txt-header text-light" aria-current="page">
              Sobre Nosotros
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
