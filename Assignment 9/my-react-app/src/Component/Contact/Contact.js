import React from 'react';
import './Contact.css';
import Card from '../Card';

const Contact = () => {
    return (
        <div className="contact">
            <Card 
                title="Contact Us" 
                content="Contact us through our email" 
            />
        </div>
    );
}

export default Contact;