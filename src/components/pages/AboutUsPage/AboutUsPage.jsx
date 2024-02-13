import React from 'react';
import Header from '../../templates/Header/Header';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import AboutUsSection from '../../organisms/AboutUsSection/AboutUsSection';
import Footer from '../../templates/Footer/Footer';

const AboutUsPage = () => {
    return (
        <div className="w-full">
            <Header />
            <Breadcrumb
                items={[
                    { text: 'Inicio', link: 'index.html' },
                    { text: '¿Por qué elegirnos?', link: '#feature' },
                    { text: 'Sobre Nosotros', active: true },
                ]}
            />
            <AboutUsSection />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
