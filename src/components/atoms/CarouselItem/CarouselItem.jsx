// CarouselItem.jsx (Atom)
import React from 'react';

const CarouselItem = ({ imgSrc, altText, headerText }) => {
    return (
        <div className="owl-carousel-item h-full position-relative">
            <picture className='h-full w-full' style={{ width: '101%' }}>
                <source loading="lazy" srcSet={`${process.env.PUBLIC_URL}${imgSrc}.webp`} type="image/webp" />
                <img loading="lazy" className="img-fluid" src={`${process.env.PUBLIC_URL}${imgSrc}.jpg`} alt={altText} />
            </picture>
            <div className="owl-carousel-text">
                <h1 className="display-1 text-white mb-0 txt-header">{headerText}</h1>
            </div>
        </div>
    );
};

export default CarouselItem;
