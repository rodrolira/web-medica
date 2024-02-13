import React from 'react';

const Image = ({ src, alt, className, style }) => (
  <div className="flex flex-col">
    <picture>
      <source loading="lazy" srcSet={`${process.env.PUBLIC_URL}${src}.webp`} type="image/webp" />
      <img loading="lazy" className={`img-fluid ${className}`} src={`${process.env.PUBLIC_URL}${src}.jpg`} alt={alt} style={style} />
    </picture>
  </div>
);

export default Image;
