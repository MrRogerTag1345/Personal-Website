// src/pages/Website.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HomePage from './HomePage';
import "./Main.css";

const Website = () => {
    return (
        <div className="website">
            <Header />
            <div className="content">
                <Sidebar />
                <HomePage />
            </div>
        </div>
    );
};

export default Website;
