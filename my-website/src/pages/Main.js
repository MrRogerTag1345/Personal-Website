import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HomePage from './HomePage';
import Experience from './Experience';
import Projects from './Projects';
import Other from './Other';
import "./Main.css";

const Website = () => {
  return (
    <div className="website">
      <Header />
      <div className="content">
        <Sidebar />
        <HomePage />
        <div className="Webpage">
          <Routes>
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Website;