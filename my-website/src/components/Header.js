import React, { useState, useEffect } from 'react';
import './Header.css';
import AnimatedLogo from './AnimatedLogo';

const Header = () => {

    return (
        <header className='header' >
            {/*
            <button className='SidebarButton'>
                 Implement sidebarbutton 
            </button>
            */}
            <span className='TitleSpan'>
                <h1>Welcome, this is <span className="MyName">Chetas</span>!</h1>
            </span>
        </header>
    );
};

export default Header;
