import React from 'react';
import GridLinks from '../components/GridLinks';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  const weblinks = [
    {
      text: 'Fuel Economy Logger',
      url: '/Fuel-Economy-Logger/index.html',
      description: 'This webpage is my introduction to creating Webpages using HTML and CSS.',
      additionalLinks: [
        { text: 'More Info', url: '/project-1/info' }, // Will have to add an info page.
        { text: 'GitHub', url: 'https://github.com/MrRogerTag1345/Fuel-Economy-Logger', external: true }
      ]
    },
    {
      text: 'Student-Financial-App',
      url: '/Fuel-Economy-Logger/index.html',
      description: 'This webpage is my introduction to creating Webpages using HTML and CSS.',
      additionalLinks: [
        { text: 'More Info', url: '/project-2/info' }, // Will have to add an info page.
        { text: 'GitHub', url: 'https://github.com/lorandkis/Student-Financial-App', external: true }
      ]
    }
  ];

  return (
    <div className="page-container">
      <main className="projects-content">
        <h1>Projects Page</h1>
        <h2>Web Development</h2>
        <GridLinks links={weblinks} />
      </main>
    </div>
  );
};

export default Projects;
