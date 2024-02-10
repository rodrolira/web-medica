// Header.jsx
import React from 'react';
import PageHeader from '../../organisms/PageHeader/PageHeader'
import CountersGroup from '../../molecules/CountersGroup/CountersGroup';

const Header = () => {
    return (
        <div className="container-fluid header bg-primary p-0 mb-5">
            <div className="row g-0 align-items-center flex-lg-row page-header text-center">
                {/* MENU 2 */}
                <PageHeader />

                {/* MENU 1 */}
                <div className="col-lg-6 p-5 wow fadeIn menu-1" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                    <h1 className="display-4 text-white mb-5">
                        <b>Centro Médico y Diagnóstico Nueva Salud</b>
                    </h1>
                    <CountersGroup />
                </div>

                {/* Carousel va aquí */}
            </div>
        </div>
    );
};

export default Header;
