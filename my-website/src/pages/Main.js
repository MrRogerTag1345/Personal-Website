import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import Home from "./Home";
import "./Main.css";

const Website = () => {
    return (
        <div className="website">
            <Header />
            <div className="content">
                <Sidebar />
            </div>
        </div>
    );
};

export default Website;
