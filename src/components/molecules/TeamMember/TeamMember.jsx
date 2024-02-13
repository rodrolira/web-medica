// TeamMember.jsx
import React from 'react';
import SocialButtons from '../SocialButtons/SocialButtons';

const TeamMember = ({ name, specialty, image, socialLinks }) => (
    <div className="wow  fadeInUp" data-wow-delay="0.7s" style={{ animationDelay: '0.7s', animationName: 'none' }}>
        <div className="team-item relative rounded overflow-hidden">
            <div className="overflow-hidden">
                <img loading="lazy" className="img-fluid" src={image} alt={name} />
            </div>
            <div className="team-text bg-light text-center p-4 px-0">
                <h5>{name}</h5>
                <p className="text-primary">{specialty}</p>
                <div className="team-social text-center">
                    <SocialButtons socialLinks={socialLinks} />
                </div>
            </div>
        </div>
    </div>
);

export default TeamMember;
