import React from 'react';
import TeamMember from '../../molecules/TeamMember/TeamMember';
import Title from '../../molecules/Title/Title';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

const members = [
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',
    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },
    {
        name: 'John Doe',
        specialty: 'Cardiologist',
        image: '/images/team/profile-doctor.jpg',

    },

];

const TeamSection = () => (
    <div className="container-xxl py-12" id="team">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', animationDelay: '0.1s', animationName: 'none' }}>
                <SectionTitle title="Médicos" />
                <Title text="Nuestros Medicos" />
            </div>
            <div className="row grid-cols-4 !grid gap-4 flex-nowrap">
                {members.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    </div>
);


export default TeamSection;
