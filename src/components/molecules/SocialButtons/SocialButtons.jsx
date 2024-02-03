// SocialButtons.jsx
import React from 'react';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialButton from '../../atoms/SocialButton/SocialButton';

const SocialButtons = () => {
    return (
        <div className="h-100 d-inline-flex box-rrss">
            <SocialButton icon={faFacebookF} href="/" />
            <SocialButton icon={faTwitter} href="/" />
            <SocialButton icon={faLinkedinIn} href="/" />
            <SocialButton icon={faInstagram} href="/" />
        </div>
    );
};

export default SocialButtons;
