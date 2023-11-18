import React from 'react';
import './About.css';
import Card from '../Card';

const About = () => {
    return (
        <div className="about">
            <Card 
                title="About Us" 
                content="Learn what we offer" 
            />
        </div>
    );
}

export default About;