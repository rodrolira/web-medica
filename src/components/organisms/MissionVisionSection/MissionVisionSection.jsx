import React from 'react';
import Image from '../../atoms/Image/Image';

const MissionVisionSection = () => (
    <div className="col-lg-6 wow fadeIn about-column" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
        <div className="flex flex-col">
            <Image src="images/about/about-1" alt="" className="rounded w-100 self-end" />
            <Image src="images/about/about-2" alt="" className="img-fluid rounded w-50 bg-white pt-3 pe-3" style={{ marginTop: '-25%' }} />
        </div>
    </div>
);

export default MissionVisionSection;
