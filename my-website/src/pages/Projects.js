import React from 'react';
import GridLinks from '../components/GridLinks';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  const weblinks = [
    {
      text: 'Fuel Economy Calculator',
      url: '',
      description: "This webpage is my introduction to creating Webpages using HTML and CSS. This website was create to track fuel expenses per communite to school and back. Since I communite to school(waterloo) during the weekdays, I have driven thousands' of kilometres. In order to track my monthly expenses, and to inform me about how much I am spending on fuel. This website give's me a break down of all the information I would need.",
      additionalLinks: [
        { text: 'More Info', url: '/Fuel-Economy-Calculator/info' }, // Will have to add an info page.
        { text: 'GitHub', url: 'https://github.com/MrRogerTag1345/Fuel-Economy-Logger', external: true }
      ]
    },
    {
      text: 'Student-Financial-App',
      url: '',
      description: 'Within this project I took on the role of Project Manager. This project is a web application that is intended to help students manage there finances.It offers tools to track the budget/ balance to setting financial goals.',
      additionalLinks: [
        { text: 'More Info', url: '/Student-Financial-App/info' }, // Will have to add an info page.
        { text: 'GitHub', url: 'https://github.com/lorandkis/Student-Financial-App', external: true }
      ]
    }
  ];

  const pythonlinks = [
    {
      text: 'Discord Stock Bot',
      url: '/Discord-Stock-Bot/info',
      description: "This Discord Bot is a sophisticated tool designed to retrieve the URL of a specified stock effortlessly and dynamically incorporate it into a link.",
      additionalLinks: [
        { text: 'GitHub', url: 'https://github.com/MrRogerTag1345/Fuel-Economy-Logger', external: true }
      ]
    },
  ];

  return (
    <div className="page-container">
      <main className="projects-content">
        <h1>Projects Page</h1>
        <h2>Web Development</h2>
        <GridLinks links={weblinks} />

        <h2>Python Project</h2>
        <GridLinks links={pythonlinks} />
      </main>
    </div>
  );
};

export default Projects;
