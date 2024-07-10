// src/pages/HomePage.js
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="particles-section">
                <ParticlesBackground />
                <div className="intro-content">
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '-1rem', fontSize: "4rem" }}>Hello, I'm Chetas Patel</h1>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: "2rem" }}>Welcome to my personal space on the web.</p>
                </div>
            </section>
            <section className="AboutMe-section">
                <h2>About Me</h2>
                <p>Here is some information about me...</p>
            </section>
        </div>
    );
};

export default HomePage;
