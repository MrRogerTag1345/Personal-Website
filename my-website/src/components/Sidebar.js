import React from 'react';
import MyPhoto from '../images/LogoSC.png'; // Update the path to your image
import './Sidebar.css'; // Import the CSS file for additional styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="Sidebar-TopElement">
        <div className='SidebarImageComponent'>
          <img className="Image" src={MyPhoto} alt="My Photo" />
        </div>
        <h2>Chetas Patel</h2>
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
