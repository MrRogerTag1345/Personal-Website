import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="Sidebar-TopElement">
                <h2 style={{ textAlign: 'left' }}>Options</h2>
            </div>
            
            <div className='ButtonElement'>
                <button className="SidebarButton">
                    <h2>Home</h2>
                </button>
                <button className="SidebarButton">
                    <h2>Experience</h2>
                </button>
                <button className="SidebarButton">
                    <h2>Projects</h2>
                </button>
                <button className="SidebarButton">
                    <h2>Other</h2>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
