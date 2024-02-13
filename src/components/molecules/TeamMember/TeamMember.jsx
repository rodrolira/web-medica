import React from 'react';
import SocialButton from '../../atoms/SocialButton/SocialButton';

const TeamMember = ({ name, specialty, image, socialLinks }) => (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'hidden', animationDelay: '0.7s', animationName: 'none' }}>
        <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
                <img loading="lazy" className="img-fluid" src={image} alt={name} />
            </div>
            <div className="team-text bg-light text-center p-4 px-0">
                <h5>{name}</h5>
                <p className="text-primary">{specialty}</p>
                <div className="team-social text-center">
                    {socialLinks.map((href, index) => (
                        <SocialButton key={index} icon={href.icon} href={href.href} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default TeamMember;
