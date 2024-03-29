// Header.jsx
import React from 'react';
import PageHeader from '../../organisms/PageHeader/PageHeader'
import CountersGroup from '../../molecules/CountersGroup/CountersGroup';
import CarouselGroup from '../../molecules/Carousel/Carousel';
import './Header.css';



const Header = () => {
    return (
        <div className="container-fluid header bg-primary !p-0 mb-10 w-full">
            <div className="h-[80vh] row g-0 items-center w-full [lg]:flex-row page-header !flex-nowrap text-center ">
                {/* LeftSide */}
                <PageHeader />

                {/* RightSide */}
                <div className="col-lg-6 w-[50%] lg:block md:hidden wow fadeIn menu-1 p-[3rem]" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                    <h1 className="display-4 text-white mb-5">
                        <b>Centro Médico </b>
                    </h1>
                    <CountersGroup />
                </div>

                <CarouselGroup className="!w-[50%]" />
            </div>
        </div>
    );
};

export default Header;
