import React, { useEffect } from 'react';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import AboutUsSection from '../../organisms/AboutUsSection/AboutUsSection';
import Features from '../../organisms/Features/Features';
import Footer from '../../templates/Footer/Footer';

const AboutUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFeatureLinkClick = () => {
        const featureSection = document.getElementById('feature');
        featureSection.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <div className="w-full" id="aboutUsPage">

            <Breadcrumb
                items={[
                    { text: 'Inicio', link: '/', },
                    { text: '¿Por qué elegirnos?', link: 'feature', onClick: handleFeatureLinkClick },
                    { text: 'Sobre Nosotros', active: true },
                ]}
            />

            <AboutUsSection />
            <Features />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
