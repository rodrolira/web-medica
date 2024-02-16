import React from 'react';
import ContactInfo from '../../molecules/ContactInfo/ContactInfo';
import ServicesLinks from '../../molecules/ServicesLinks/ServicesLinks';
import QuickLinks from '../../molecules/QuickLinks/QuickLinks';
import NewsletterSignup from '../../organisms/NewsletterSignup/NewsletterSignup';
import Copyright from '../../atoms/Copyright/Copyright';

const Footer = () => (
    <div className="container-fluid bg-teal-900 text-white footer  pt-5 wow fadeIn text-center" data-wow-delay="0.1s" style={{ animationDelay: '0.1s', animationName: 'none' }}>
        <div className="container py-12">
            <div className="row g-5 items-baseline">
                <ContactInfo />
                <ServicesLinks />
                <QuickLinks />
                <NewsletterSignup />
            </div>
        </div>
        <Copyright />
    </div>
);

export default Footer;
