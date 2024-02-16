import { React } from 'react';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import Specialties from '../../organisms/Specialties/Specialties';
import Footer from '../../templates/Footer/Footer';



const ServicesPage = () => {


    return (
        <div className="w-full" id="servicesPage">
            <Breadcrumb
                items={[
                    { text: 'Inicio', link: '/', },
                    { text: 'Sobre Nosotros', link: '/about' },
                    { text: 'Especialidades Médicas', active: true },
                ]}
            />

            <Specialties />
                <Footer/>
        </div>
    );
};

export default ServicesPage;
