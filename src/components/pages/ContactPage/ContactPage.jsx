import React from "react";
import Breadcrumb from "../../molecules/Breadcrumb/Breadcrumb";
import ContactSection from "../../organisms/ContactSection/ContactSection";


const ContactPage = () => {

    return (
        <div className="w-full" id="contactPage">
            <Breadcrumb
                items={[
                    { text: 'Inicio', link: '/', },
                    { text: 'Agenda tu Hora', link: '/appointment' },
                    { text: 'Contacto', active: true },
                ]}
            />
            <ContactSection />

        </div>
    );
};

export default ContactPage;
