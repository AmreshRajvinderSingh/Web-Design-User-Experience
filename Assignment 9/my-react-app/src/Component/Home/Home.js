import React from 'react';
import { useUser } from '../UserContext';
import Card from '../Card';
import './Home.css';

const Home = () => {
    const { user } = useUser();
    return (
        <div className="home">
             <Card 
                title={`Welcome, ${user ? user.fullName : 'User'}`} 
                content="Home page" 
            />
        </div>
    );
}

export default Home;