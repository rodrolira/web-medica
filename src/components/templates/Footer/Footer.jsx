import React from 'react';
import ContactInfo from '../../molecules/ContactInfo/ContactInfo';
import ServicesLinks from '../../molecules/ServicesLinks/ServicesLinks';
import QuickLinks from '../../molecules/QuickLinks/QuickLinks';
import NewsletterSignup from '../../organisms/NewsletterSignup/NewsletterSignup';

const Footer = () => (
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn text-center" data-wow-delay="0.1s" style={{ visibility: 'hidden', animationDelay: '0.1s', animationName: 'none' }}>
        <div className="container py-5">
            <div className="row g-5 align-items-baseline">
                <ContactInfo />
                <ServicesLinks />
                <QuickLinks />
                <NewsletterSignup />
            </div>
        </div>
        {/* Additional copyright and attribution section */}
    </div>
);

export default Footer;
